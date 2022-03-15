import AsyncStorage from '@react-native-community/async-storage';

export const setAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};

export const setMultiAsyncStorage = async data => {
  try {
    await AsyncStorage.multiSet(data);
  } catch (error) {}
};

export const getAsyncStorage = async key => {
  let data = null;
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      data = value;
    }
  } catch (error) {}
  return data;
};

export const removeAsyncStorage = async (key, success) => {
  try {
    await AsyncStorage.removeItem(key, success);
  } catch (error) {}
};

export const removeMultiAsyncStorage = async (key, success) => {
  try {
    await AsyncStorage.multiRemove(key, success);
  } catch (error) {}
};

export const getMultiAsyncStorage = async (keys, success) => {
  try {
    await AsyncStorage.multiGet(keys, success);
  } catch (error) {}
};

export const clearAsyncStorage = async success => {
  try {
    await AsyncStorage.clear(success);
  } catch (error) {}
};