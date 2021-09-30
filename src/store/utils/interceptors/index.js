import * as Util from '../index';
export class Interceptor {
  static headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  static getHeadersWithout = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  static token = null;

  static getHeaders() {
    return this.headers;
  }
  static getHeadersWithoutToken() {
    return this.getHeadersWithout;
  }

  static getHeadersWithExplicitToken(token) {
    temp = this.headers;
    temp.Authorization = `Bearer ${token}`;
    return temp;
  }

  static getFileUploadHeaders() {
    var custom = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    // if (this.token != null) {
    //     custom.Authorization = this.token;
    // }

    return custom;
  }

  static getFormDataWithTokenHeaders(token) {
    var custom = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    if (token != null) {
      console.log(token, 'token');
      custom.Authorization = `Bearer ${token}`;
    }

    return custom;
  }

  static setToken(token) {
    this.token = token;
  }

  static getToken() {
    return this.token;
  }
}
