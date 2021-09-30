export const BASE_URL = __DEV__
  ? 'https://roomio.heuristix.net/api/'
  : 'https://roomio.heuristix.net/api/';
export const endPoints = {
  SignUp: 'v1/auth/signup',
  login: 'v1/auth/login',
  Social: 'v1/auth/social',
  UserDetail: 'v1/user',
  UserProfile: 'v1/user/profile',
  ProfileUpdate: 'v1/user/profile/update',
  GovernmentId: 'v1/user/verification',
};
