import MainNavigation from "./MainNavigation";

function Layout (props) {
    return (
        <div>
            <main>
                <MainNavigation updateProducts={ props.updateProducts } />
                { props.children }
            </main>
        </div>
    );
}

export default Layout;