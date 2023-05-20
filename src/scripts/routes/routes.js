import Home from '../pages/home';
import Favorite from '../pages/favorite';
import Detail from '../pages/detail';

const routes = {
  '/': Home, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
