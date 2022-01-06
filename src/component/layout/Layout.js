import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout (props) {
    return (
        <div>
            <main className={ classes.main }>
                <MainNavigation updateProducts={ props.updateProducts } />
                { props.children }
            </main>
        </div>
    );
}

export default Layout;