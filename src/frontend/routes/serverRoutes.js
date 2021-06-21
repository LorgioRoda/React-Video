import Home from "../Container/Home";
import Login from "../Container/Login";
import NotFound from "../Container/NotFound";
import Player from "../Container/Player";
import Register from "../Container/Register";

const routes = [
    {
        exact: true,
        path="/",
        component: Home,
    },
    {
        exact: true,
        path="login",
        component: Login,
    },
    {
        exact: true,
        path="register",
        component: Register,
    },
    {
        exact: true,
        path="player/:id",
        component: Player,
    },
    {
        name: 'NotFound',
        component: NotFound,
    },
]

export default routes