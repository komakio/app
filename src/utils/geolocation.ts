import RNGeolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

export class Geolocation {
  public static get(): Promise<GeolocationResponse> {
    return new Promise((resolve, reject) => {
      RNGeolocation.getCurrentPosition(
        (info) => resolve(info),
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            return reject('GEOLOCATION_PERMISSION_DENIED');
          }
          if (error.code === error.POSITION_UNAVAILABLE) {
            return reject('GEOLOCATION_POSITION_UNAVAILABLE');
          }
          if (error.code === error.TIMEOUT) {
            return reject('GEOLOCATION_TIMEOUT');
          }
          reject(error);
        },
        { enableHighAccuracy: true }
      );
    });
  }
}
