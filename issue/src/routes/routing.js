import Layout from 'components';
import Error from 'pages/Error';
import Home from 'pages/Home/Home';
import List from 'pages/list/List';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/list',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <List />,
            },
        ],
    },
    {
        path: '/error',
        element: <Error />,
    },
]);

export default router;
