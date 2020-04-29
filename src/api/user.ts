import { axiosInstance } from './base';
import { LoginResult, User } from '@models/user';
import { getUniqueId } from 'react-native-device-info';

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

  public static async loginFacebook(accessToken: string): Promise<LoginResult> {
    const res = await axiosInstance.post('/v1/users/login/facebook', {
      fbAccessToken: accessToken,
    });
    return res.data;
  }

  public static async deleteRegistrationToken(
    accessToken: string,
    registrationToken: string
  ): Promise<LoginResult> {
    const res = await axiosInstance.post(
      '/v1/users/registration-token/unset',
      {
        uuid: getUniqueId(),
        registrationToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  }

  public static async patchRegistrationToken(
    accessToken: string,
    registrationToken: string
  ): Promise<LoginResult> {
    const res = await axiosInstance.patch(
      '/v1/users/registration-token',
      {
        uuid: getUniqueId(),
        registrationToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  }

  public static async patchUser(
    accessToken: string,
    data: Partial<User>
  ): Promise<LoginResult> {
    const res = await axiosInstance.patch('/v1/users', data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }

  public static async getCurrent(accessToken: string): Promise<User> {
    const res = await axiosInstance.get('/v1/users/current', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }
}
