import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pictures from '../pages/Pictures';
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
    },
    {
        path: '/pictures',
        element: (<Pictures />)
    }
]);

export default router;