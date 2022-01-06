import { useState } from 'react';
import classes from './SortBy.module.css';
import { TextField, MenuItem } from "@mui/material";

function SortBy (props) {
    const sortBy = ["Low Price", "High Price", "Top Rated"];
    const [sort, setSort] = useState("");
    const products = props.products;

    function sortByHandler (event) {
        const sortBy = event.target.value;
        setSort(sortBy);

        switch (sortBy) {
            case 'Low Price':
                sortByLowPrice();
                break;
            case 'High Price':
                sortByHighPrice();
                break;
            case 'Top Rated':
                sortByTopRated();
                break;
            default:
                break;
        }
    }

    function sortByLowPrice () {
        props.updateProducts([...products.sort((p1, p2) => p1['price'] - p2['price'])]);
    }

    function sortByHighPrice () {
        props.updateProducts([...products.sort((p1, p2) => p2['price'] - p1['price'])]);
    }

    function sortByTopRated () {
        props.updateProducts([...products.sort((p1, p2) => p2['rate'] - p1['rate'])]);
    }

    return (
        <div className={ classes.wrapper }>
            <TextField className={ classes.sort }
                id="outlined-select-order"
                select
                label="SORT BY"
                value={ sort }
                onChange={ sortByHandler }
            >
                { sortBy.map((option) => (
                    <MenuItem key={ option } value={ option }>
                        { option }
                    </MenuItem>
                )) }
            </TextField>
        </div>
    );
}

export default SortBy;