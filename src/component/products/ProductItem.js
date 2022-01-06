import { FiHeart } from 'react-icons/fi';
import classes from "./ProductItem.module.css";
import { useContext } from "react";
import Card from "../ui/Card";
import WatchListContext from "../../context/watchListContext";
import { Rating } from 'react-simple-star-rating';


function ProductItem (props) {
    const watchListCtx = useContext(WatchListContext);
    const productIsInWatchList = watchListCtx.productIsInWatch(props.id);

    function toggleWatchListStatusHandler () {
        console.log("in watch change status");
        console.log("in watch " , productIsInWatchList);

        if (productIsInWatchList) {
            watchListCtx.removeFromWatch(props.id);
        } else {
            watchListCtx.addToWatch({
                id: props.id,
                name: props.name,
                image: props.image,
                description: props.description,
                price: props.price,
                rate: props.rate
            });
        }
    }

    return (
        <Card>
            <img className={ classes.image } src={ props.image } alt={ props.name } />
            <div className={ classes.content }>
                <p className={ classes.name }>{ props.name }</p>
                <p className={ classes.price }>{ props.price }</p>
                <p className={ classes.description }>{ props.description }</p>
            </div>
            <div className={ classes.footer }>
                <span>
                    <Rating readonly='true' initialValue={ props.rate } size='14px' />
                    <span className={ classes.rate }>{ props.rate }</span>
                </span>
                < button className={ classes.btn } onClick={ toggleWatchListStatusHandler }>
                    <span className={ classes.btnText }>
                        <FiHeart className={ classes.btnIcon } />
                        {productIsInWatchList ? "Remove" : "Watch"}
                    </span>
                </button>
            </div>
        </Card>
    );
}

export default ProductItem;