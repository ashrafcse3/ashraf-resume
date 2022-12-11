import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
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
                path: '/projects',
                element: <Home />
            },
            {
                path: '/project/:id',
                element: <ProjectDetails />,
                loader: ({ params }) => fetch(`http://localhost:4000/project/${params.id}`)
            },
            {
                path: '/aboutme',
                element: <Home />
            },
        ],
    }
]);