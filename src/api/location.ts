import { axiosInstance } from './base';

export interface GeolocationResult {
  label: string;
  layer: string;
  longitude: number;
  latitude: number;
}

export class LocationApi {
  public static async autocomplete(
    accessToken: string,
    text: string
  ): Promise<GeolocationResult[]> {
    const res = await axiosInstance.post(
      '/v1/geocoder/autocomplete',
      { text, size: 5 },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data.results;
  }
}
