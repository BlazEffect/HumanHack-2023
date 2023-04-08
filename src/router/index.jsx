import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pictures from '../pages/Pictures';
import Drawing from '../pages/Drawing';
import Main from '../pages/Main';
import Alphabet from '../pages/Alphabet.jsx';
import MathPage from '../pages/MathPage';
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
    },
    {
        path: '/pictures',
        element: (<Pictures />)
    },
    {
        path: '/math',
        element: <MathPage />
    }
]);

export default router;