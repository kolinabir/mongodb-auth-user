import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  const { password, ...user } = result.toObject();
  return user;
};

export const UserService = {
  createUserIntoDB,
};
