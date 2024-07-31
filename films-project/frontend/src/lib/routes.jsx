import { createBrowserRouter } from "react-router-dom";

// importar páginas

// imporar páginas especiales

import Layout from "../Layout";
import FilmsDisplay from '../pages/FilmsDisplay'

// importar páginas especiales
import ErrorPage from "../error-page";
import FormPage from "../pages/FormPage";

const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            path: '/',
            element: <FormPage/>
        },
        {
            path: '/filmsDisplay',
            element: <FilmsDisplay/>
        },
        {
            path: '*',
            element: <ErrorPage/>
        },
    ]
}]);

export default router;