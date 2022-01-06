import { createContext, useState } from "react";

const WatchListContext = createContext({
    watchList: [],
    totalWatchList: 0,
    addToWatch: (watchProduct) => { },
    removeFromWatch: (productId) => { },
    productIsInWatch: (productId) => { }
});

export function WatchListContextProvider (props) {
    const [userWatchList, setUsersWatchList] = useState([]);

    function addToWatchHandler (watchProduct) {
        setUsersWatchList((prevUserWatchList) => {
            return prevUserWatchList.concat(watchProduct);
        });
    }

    function removeFromWatchHandler (productId) {
        setUsersWatchList((prevUserWatchList) => {
            return prevUserWatchList.filter((product) => product.id !== productId);
        });
    }

    function productIsInWatchHandler (productId) {
        return userWatchList.some((product) => product.id === productId);
    }

    const context = {
        watchList: userWatchList,
        totalWatchList: userWatchList.length,
        addToWatch: addToWatchHandler,
        removeFromWatch: removeFromWatchHandler,
        productIsInWatch: productIsInWatchHandler,
    };

    return (
        <WatchListContext.Provider value={ context }>
            { props.children }
        </WatchListContext.Provider>
    );
}

export default WatchListContext;