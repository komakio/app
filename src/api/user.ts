import { getUniqueId } from 'react-native-device-info';
import { axiosInstance } from './base';

interface User {
  username: string;
  createdAt: string;
  _id: string;
}

export class UsersApi {
  public static async loginRegister(
    password: string
  ): Promise<{
    user: User;
    accessToken: { accessToken: string; expiration: number };
  }> {
    const res = await axiosInstance.post('/v1/users/login', {
      username: getUniqueId(),
      password,
    });
    return res.data;
  }
  public static async loginApple(authorizationCode: string): Promise<{}> {
    const res = await axiosInstance.post('/v1/users/login/apple', {
      authorizationCode,
    });
    return res.data;
  }
}
