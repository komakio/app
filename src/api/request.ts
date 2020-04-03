import { axiosInstance } from './base';
import { Profile } from '@models/profile';

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
    const res = await axiosInstance.get(`/v1/profiles/${profileId}/requests`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }

  public static async acceptRequest(
    accessToken: string,
    requestId: string,
    profileId: string
  ) {
    const res = await axiosInstance.post(
      `/v1/requests/${requestId}/accept`,
      { profileId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  }

  public static async refuseRequest(
    accessToken: string,
    requestId: string,
    profileId: string
  ) {
    const res = await axiosInstance.post(
      `/v1/requests/${requestId}/refuse`,
      { profileId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  }

  public static async cancelRequest(
    accessToken: string,
    requestId: string,
    profileId: string
  ) {
    const res = await axiosInstance.post(
      `/v1/requests/${requestId}/cancel`,
      { profileId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  }

  public static async getProfileFromRequest(
    accessToken: string,
    requestId: string,
    profileId: string
  ) {
    const res = await axiosInstance.get(
      `/v1/requests/${requestId}/profiles/${profileId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data?.find((profile: Profile) => profile._id === profileId);
  }
}
