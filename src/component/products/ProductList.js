import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

function ProductList (props) {
    return (
        <div className={ classes.list }>
            { props.products.map((product) =>
                <ProductItem
                    key={ product.id }
                    id={ product.id }
                    image={ product.image }
                    name={ product.name }
                    rate={ product.rate }
                    price={ product.price }
                    description={ product.description } />
            ) }
        </div>
    );
}

export default ProductList;