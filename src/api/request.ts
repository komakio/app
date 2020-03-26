import { axiosInstance } from './base';

export class RequestsApi {
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

  public static async getAllRequests(accessToken: string, profileId: string) {
    const res = await axiosInstance.get(
      `/v1/requests/profile/${profileId}/requests`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  }
}
