import { Container, Navbar } from "react-bootstrap";
import { BiSearchAlt2 } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const allProducts = JSON.parse(localStorage.getItem('products-list'));

function MainNavigation (props) {
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    function cancelSearchHandler (event) {
        setText("");
        setSuggestions([]);
        props.updateProducts(allProducts);
    }

    function searchHandler (event) {
        const searchText = event.target.value;
        let matches = [];
        if (searchText.length > 0) {
            matches = allProducts.filter((product) => {
                const regex = new RegExp(`${searchText}`, "gi");
                return product.name.match(regex);
            });
        }

        setSuggestions(matches);
        setText(searchText);
    }

    function onSugestHandler (sugestText) {
        setText(sugestText);
        setSuggestions([]);
        const product = allProducts.find((product) => product.name === sugestText);
        console.log(product);
        props.updateProducts([].concat(product));
    }

    return (
        <Navbar bg="light" variant="light">
            <Container fluid>
                <Navbar.Brand>
                    < Link to='/' style={ { textDecoration: "none" } }>Shopka</Link>
                </Navbar.Brand>
                <section className={ classes.search }>
                    <button className={ classes.done }>
                        <BiSearchAlt2 />
                    </button>
                    <div>
                        <input className={ classes.text } value={ text } placeholder="search" onChange={ searchHandler } />
                        { suggestions &&
                            suggestions.map((suggestion, i) => (
                                <div
                                    key={ i }
                                    className={ classes.suggestion }
                                    onClick={ () => onSugestHandler(suggestion.name) }
                                >
                                    { suggestion.name }
                                </div>
                            )) }
                    </div>
                    <button className={ classes.cancel } onClick={ cancelSearchHandler }>
                        <VscChromeClose />
                    </button>
                </section>
                <section className={ classes.buttons }>
                    < button className={ classes.btn }>
                        < Link to='/watch-list' style={ { textDecoration: "none" } }>Watch</Link>
                    </button>
                    < button className={ classes.btn }>
                        My cart
                    </button>
                    {/* avatar */ }
                </section>
            </Container>
        </Navbar >
    );
}

export default MainNavigation;