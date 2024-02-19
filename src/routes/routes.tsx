import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/layout/AdminLayout";

export { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },

        ]
    }, {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                index: true,
                element: <h1>This a admin Dashboard</h1>
            },
            {
                path: "add-admin",
                element: <h1>This is add admin page</h1>
            },
            
        ]
    }
])


export default router;