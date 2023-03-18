const { Outlet } = require('react-router');
const { default: Header } = require('./Header/Header');

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Layout;
