import { getUniqueId } from 'react-native-device-info';
import { axiosInstance } from './base';
import { LoginResult } from '../models/user';
import { Profile } from '../models/profile';

interface User {
  username: string;
  createdAt: string;
  _id: string;
}

export class UsersApi {
  public static async getProfiles(accessToken: string): Promise<any> {
    const res = await axiosInstance.get('/v1/profiles', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }

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

  public static async createProfile(accessToken: string, profile: Profile) {
    const res = await axiosInstance.post('/v1/profiles', profile, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }

  public static async createRequest(accessToken: string, profileId: string) {
    const res = await axiosInstance.post(
      '/v1/requests',
      { profileId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  }
}
