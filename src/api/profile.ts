import { axiosInstance } from './base';
import { Profile, PatchProfile } from '../models/profile';

export class ProfilesApi {
  public static async getProfiles(accessToken: string): Promise<Profile[]> {
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

  public static async patchProfile(
    accessToken: string,
    profileId: string,
    profile: PatchProfile
  ) {
    const res = await axiosInstance.put(`/v1/profiles/${profileId}`, profile, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }
}
