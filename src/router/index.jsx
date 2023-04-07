import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Drawing from '../pages/Drawing';
import Main from '../pages/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: (<Main />)
    },
    {
        path: '/draw',
        element: (<Drawing />)
    }
]);

export default router;