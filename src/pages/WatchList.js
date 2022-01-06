import { useContext } from 'react';
import WatchListContext from "../context/watchListContext";
import ProductsList from "../component/products/ProductList";
import classes from "./WatchList.module.css";

function WatchListPage () {
    const watchListCtx = useContext(WatchListContext);

    let content;

    if (watchListCtx.totalWatchList === 0) {
        content = <p>You don't have any items in watch list.</p>;
    } else {
        content = <ProductsList products={ watchListCtx.watchList } />;
    }

    return (
        <section className={ classes.content }>
            <h1>My Watch List</h1>
            { content }
        </section>
    );
}

export default WatchListPage;