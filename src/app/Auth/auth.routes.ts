import { Router } from 'express';
import { AuthController } from './auth.controller';
import { UserController } from '../User/user.controller';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../middlewares/validateRequest';
import { AuthValidation } from './auth.validations';
import auth from '../middlewares/auth';
import { UserValidationSchema } from '../User/user.validation';

const router = Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
);
router.post(
  '/change-password',
  auth(
    USER_ROLE.faculty,
    USER_ROLE.admin,
    USER_ROLE.official,
    USER_ROLE.student,
  ),
  AuthController.changePassword,
);

router.post(
  '/register',
  validateRequest(UserValidationSchema.createUserValidationSchema),
  UserController.createUser,
);

router.get(
  '/check-auth',
  auth(
    USER_ROLE.student,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.official,
  ),
  AuthController.checkAuthentication,
);

export const AuthRoute = router;