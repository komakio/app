import { axiosInstance } from './base';
import { LoginResult } from '../models/user';

export class UsersApi {
  public static async loginApple(identityToken: string): Promise<LoginResult> {
    const res = await axiosInstance.post('/v1/users/login/apple', {
      identityToken,
    });
    return res.data;
  }

  public static async loginGoogle(identityToken: string): Promise<LoginResult> {
    const res = await axiosInstance.post('/v1/users/login/google', {
      identityToken,
    });
    return res.data;
  }
}
