import * as Util from '../index';
export const postRequest = (
  endpoint,
  params,
  successcallback,
  errorcallback,
) => {
  console.log('Headers', Util.Interceptor.getHeaders());
  console.log('_PARAMS', params);
  return fetch(`${Util.BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: Util.Interceptor.getHeaders(),
    body: JSON.stringify(params),
  })
    .then(response => {
      console.log('API response', response);
      successcallback(response);
    })
    .catch(err => {
      console.log('showing error in api', err);
      errorcallback(err);
    });
};
export const postRequestWithFormData = (
  endpoint,
  params,
  successcallback,
  errorcallback,
) => {
  return fetch(`${Util.BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: Util.Interceptor.getFileUploadHeaders(),
    body: params,
  })
    .then(response => {
      successcallback(response);
    })
    .catch(err => {
      errorcallback(err);
    });
};

export const postRequestWithTokenandFormData = (
  endpoint,
  params,
  token,
  successcallback,
  errorcallback,
) => {
  return fetch(`${Util.BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: Util.Interceptor.getFormDataWithTokenHeaders(token),
    body: params,
  })
    .then(response => {
      successcallback(response);
    })
    .catch(err => {
      errorcallback(err);
    });
};

export const postRequestWithToken = (
  endpoint,
  token,
  params,
  successcallback,
  errorcallback,
) => {
  return fetch(`${Util.BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: Util.Interceptor.getHeadersWithExplicitToken(token),
    body: JSON.stringify(params),
  })
    .then(response => {
      successcallback(response);
    })
    .catch(err => {
      errorcallback(err);
    });
};
export const getRequestWithToken = (
  endpoint,
  token,
  successcallback,
  errorcallback,
) => {
  return fetch(`${Util.BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: Util.Interceptor.getHeadersWithExplicitToken(token),
  })
    .then(response => {
      successcallback(response);
    })
    .catch(err => {
      errorcallback(err);
    });
};
export const getRequest = (endpoint, successcallback, errorcallback) => {
  return fetch(`${Util.BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      successcallback(response);
    })
    .catch(err => {
      console.log('showig err', err);

      errorcallback(err);
    });
};
