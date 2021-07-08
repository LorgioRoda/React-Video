import Home from '../Container/Home';
import Login from '../Container/Login';
import Register from '../Container/Register';
import NotFound from '../Container/NotFound.jsx';
import Player from '../Container/Player';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/register',
    component: Register,
  },
  {
    exact: true,
    path: '/player/:id',
    component: Player,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
