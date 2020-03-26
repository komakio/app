import { axiosInstance } from './base';
import { Profile } from '../models/profile';

export class ProfilesApi {
  public static async getProfiles(accessToken: string): Promise<any> {
    const res = await axiosInstance.get('/v1/profiles', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
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
}
