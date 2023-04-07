import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Drawing from '../pages/Drawing';
import Main from '../pages/Main';
import Alphabet from '../pages/Alphabet.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (<Main />)
    },
    {
        path: '/alphabet',
        element: (<Alphabet />)
    },
    {
        path: '/draw',
        element: (<Drawing />)
    }
]);

export default router;