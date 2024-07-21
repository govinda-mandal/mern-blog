import { IRoute } from "../interfaces/routes";
import Blog from "../pages/Blog";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import Login from "../pages/Login";

const authRoutes: IRoute[] = [
    {
        path: "/login",
        name: "Login",
        exact: true,
        auth: false,
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        exact: true,
        auth: false,
        component: Login
    }
];


const blogRoutes: IRoute[] = [
    {
        path: "/edit",
        name: "Edit",
        exact: true,
        auth: true,
        component: Edit
    },
    {
        path: "/blogs/:blogId?",
        name: "Blog",
        exact: true,
        auth: false,
        component: Blog
    }
];

const mainRoutes: IRoute[] = [
    {
        path: "/",
        name: "Home",
        exact: true,
        auth: false,
        component: Home
    }
];

const routes: IRoute[] = [...authRoutes, ...blogRoutes, ...mainRoutes];

export default routes;
