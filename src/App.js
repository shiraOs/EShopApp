import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";
import AllProductsPage from "./pages/AllProducts";
import WatchListPage from "./pages/WatchList";
import { useState, useEffect } from 'react';


function App () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      '/products'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
        localStorage.setItem('products-list', JSON.stringify(data));
      });

  }, []);


  return (
    <Layout updateProducts={ setProducts }>
      <Routes>
        <Route path="/" element={ <AllProductsPage productsList={products} updateProducts={ setProducts } /> } />
        <Route path="/watch-list" element={ <WatchListPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;
