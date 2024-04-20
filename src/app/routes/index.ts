import { Router } from 'express';
import { AuthRoute } from '../Modules/Auth/auth.routes';
import { newsRoutes } from '../Modules/News/news.routes';

const router = Router();

const modulesRoutes = [
  {
    path: '/auth',
    router: AuthRoute,
  },
  {
    path: '/news',
    router: newsRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
