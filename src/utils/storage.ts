import AsyncStorage from '@react-native-community/async-storage';

export class Storage {
  public static async set(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
  }
  public static async setJson(key: string, value: object) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
  public static async get(key: string) {
    return AsyncStorage.getItem(key);
  }
  public static async getJson(key: string) {
    const res = await AsyncStorage.getItem(key);
    return JSON.parse(res);
  }

  public static async remove(key: string) {
    return AsyncStorage.removeItem(key);
  }
}
