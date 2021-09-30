import Toast from 'react-native-simple-toast';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SkypeIndicator} from 'react-native-indicators';

export const showToast = (message, duration) => {
  Toast.show(message, duration ? Toast.LONG : Toast.SHORT);
};

export const getPicture = (type, success, reject) => {
  console.log('type', type);
  const options = {
    quality: 1.0,
    maxWidth: 600,
    maxHeight: 850,
    mediaType: 'photo',
    saveToPhotos: false,
    includeBase64: true,
  };
  if (type === 'camera') {
    launchCamera(options, response => {
      if (response.didCancel) {
        reject();
      } else if (response.errorCode) {
        reject();
      } else {
        success(response);
      }
    });
  }
  if (type === 'gallery') {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        reject();
      } else if (response.errorCode) {
        reject();
      } else {
        success(response);
      }
    });
  }
};

export const getMultiplePictures = (type, success, reject) => {
  console.log('type', type);
  const options = {
    quality: 1.0,
    maxWidth: 600,
    maxHeight: 850,
    mediaType: 'photo',
    saveToPhotos: false,
    includeBase64: true,
    selectionLimit: 0,
  };
  // if (type === 'camera') {
  //   launchCamera(options, response => {
  //     if (response.didCancel) {
  //       reject();
  //     } else if (response.errorCode) {
  //       reject();
  //     } else {
  //       success(response);
  //     }
  //   });
  // }
  if (type === 'gallery') {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        reject();
      } else if (response.errorCode) {
        reject();
      } else {
        success(response);
      }
    });
  }
};

export const emailValidator = val => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
};

export const consoleLogger = (indicator, value) => {
  console.log(indicator, value);
};

export const Lumper = size => {
  return <SkypeIndicator color="#EE2073" size={size ? size : 30} />;
};

export const storeToStorage = async (key, data) => {
  try {
    console.log('key', key);
    console.log('data', data);
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
export const retriveFromStorage = (key, token) => {
  AsyncStorage.getItem(key, (err, value) => {
    if (err) {
      console.log(err);
      token(null);
    } else {
      token(JSON.parse(value));
    }
  });
};


export const clearAsyncStorage = success => {
  AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => success(true));
};
