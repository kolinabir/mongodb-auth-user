import { Router } from 'express';
import { newsController } from './news.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();

router.post('/', auth(USER_ROLE.admin), newsController.createNews);
router.get('/', newsController.getNews);
router.get('/:id', newsController.getNewsById);
router.patch('/:id', auth(USER_ROLE.admin), newsController.updateNews);
router.delete('/:id', auth(USER_ROLE.admin), newsController.deleteNews);

export const newsRoutes = router;
