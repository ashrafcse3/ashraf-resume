import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allproject',
                element: <Home />
            },
            {
                path: '/projectdescription/2',
                element: <Home />
            },
            {
                path: '/aboutme',
                element: <Home />
            },
        ],
    }
]);