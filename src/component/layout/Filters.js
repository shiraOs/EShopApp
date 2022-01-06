import { useState } from 'react';
import classes from './Filters.module.css';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { Rating } from 'react-simple-star-rating';

const allProducts = JSON.parse(localStorage.getItem('products-list'));

function Filters (props) {
    const [price, setPrice] = useState([10, 200]);

    // Changing State when price range increases/decreases
    function priceRangeChangeHandler (event, newPrice) {
        setPrice(newPrice);
        const lowPrice = newPrice[0];
        const highPrice = newPrice[1];
        const productsToDisplay = allProducts.filter(p => p['price'] >= lowPrice && p['price'] <= highPrice);
        props.updateProducts([...productsToDisplay]);
    };

    function valueText (value) {
        return `$${value}`;
    }

    const MySlider = styled(Slider)(({ theme }) => ({
        color: '#000000',
        '& .MuiSlider-valueLabel': {
            fontSize: 12,
            fontWeight: 'normal',
            top: -6,
            backgroundColor: 'unset',
            color: theme.palette.text.primary,
        },
    }));

    // Handlers for filter by rate
    function rateFoureHandler () {
        const productsToDisplay = allProducts.filter(p => p['rate'] >= 4);
        props.updateProducts([...productsToDisplay]);
    }

    function rateThreeHandler () {
        const productsToDisplay = allProducts.filter(p => p['rate'] >= 3);
        props.updateProducts([...productsToDisplay]);
    }

    function rateTwoHandler () {
        const productsToDisplay = allProducts.filter(p => p['rate'] >= 2);
        props.updateProducts([...productsToDisplay]);
    }

    function rateOneHandler () {
        const productsToDisplay = allProducts.filter(p => p['rate'] >= 1);
        props.updateProducts([...productsToDisplay]);
    }

    return (
        <div className={ classes.wrapper }>
            <section className={ classes.slider }>
                <div className={ classes.slider_title }>
                    Price Range Selected
                </div>
                <MySlider
                    min={ 10 }
                    max={ 200 }
                    value={ price }
                    onChange={ priceRangeChangeHandler }
                    valueLabelDisplay="on"
                    valueLabelFormat={ valueText }
                />
            </section>
            <section className={ classes.reviews }>
                <div className={ classes.reviews_title }>
                    CUSTOMER REVIEWS
                </div>
                <div>
                    <span className={ classes.rate_stars } onClick={ rateFoureHandler } >
                        <Rating readonly='true' initialValue={ 4 } iconsCount={ 4 } size='14px' />
                        <span className={ classes.rate_text }>&amp; Up</span>
                    </span>
                    <span className={ classes.rate_stars } onClick={ rateThreeHandler }>
                        <Rating readonly='true' initialValue={ 3 } iconsCount={ 3 } size='14px' />
                        <span className={ classes.rate_text }>&amp; Up</span>
                    </span>
                </div>
                <div>
                    <span className={ classes.rate_stars } onClick={ rateTwoHandler }>
                        <Rating readonly='true' initialValue={ 2 } iconsCount={ 2 } size='14px' />
                        <span className={ classes.rate_text }>&amp; Up</span>
                    </span>
                    <span className={ classes.rate_stars } onClick={ rateOneHandler }>
                        <Rating readonly='true' initialValue={ 1 } iconsCount={ 1 } size='14px' />
                        <span className={ classes.rate_text }>&amp; Up</span>
                    </span>
                </div>
            </section>
        </div>
    );
}


export default Filters;