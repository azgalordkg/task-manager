import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  async storeData(key: string, value: unknown) {
    try {
      const jsonValue = JSON.stringify(value);
      return await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  }

  static async getData(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
