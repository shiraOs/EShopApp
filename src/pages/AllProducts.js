import ProductList from "../component/products/ProductList";
import classes from "./AllProducts.module.css";
import SortBy from "../component/ui/SortBy";
import Filters from "../component/layout/Filters";

function AllProductsPage (props) {
    const loadedProducts = props.productsList;

    return (
        <div className={ classes.wrapper }>
            <Filters updateProducts={ props.updateProducts } />
            <div className={ classes.content }>
                <SortBy products={ loadedProducts } updateProducts={ props.updateProducts } />
                <ProductList products={ loadedProducts } />
            </div>
        </div>
    );
}

export default AllProductsPage;