import * as TYPES from '../../types';
import * as Util from '../../utils';
import * as TASKS from '../index';
import * as RootNavigation from '../../../navigation/RootNavigation';

export const Login = params => {
  return dispatch => {
    dispatch(TASKS.showLoader());
    Util.postRequestWithFormData(
      Util.endPoints.login,
      params,
      result => {
        dispatch(TASKS.hideLoader());
        console.log('result', result);
        if (result.status == 200) {
          result.json().then(data => {
            if (data && data.status == true) {
              console.log(data);
              data.data.user.token = data.data.access_token;
              dispatch({
                type: TYPES.ADD_USER,
                user: data.data.user,
              });
              console.log('Login Done');
              RootNavigation.navigate('Explore');
            } else {
              try {
                if (data.errors) {
                  Util.showToast(data.errors.error, 2000);
                }
              } catch (error) {}
            }
          });
        } else {
          Util.showToast('Unable to signup!');
          // throw result;
        }
      },
      err => {
        dispatch(TASKS.hideLoader());
        console.log(err);
        Util.showToast('Something went wrong');
      },
    );
  };
};

export const SignUp = params => {
  return dispatch => {
    dispatch(TASKS.showLoader());
    Util.postRequestWithFormData(
      Util.endPoints.SignUp,
      params,
      result => {
        dispatch(TASKS.hideLoader());
        console.log('result', result);
        if (result.status == 200) {
          result.json().then(data => {
            Util.consoleLogger('Signup response', data);
            if (data && data.status == true) {
              // let token = data.data.user_access_token;
              // Util.storeToStorage ('token', token);
              data.data.user.token = data.data.user_access_token;
              dispatch({
                type: TYPES.ADD_USER,
                user: data.data.user,
              });
              console.log('signup ho gya');
              RootNavigation.navigate('Explore');
            } else {
              try {
                if (data.errors) {
                  Util.showToast(data.errors.error, 2000);
                }
              } catch (error) {}
            }
          });
        } else {
          Util.showToast('Unable to signup!');
          // throw result;
        }
      },
      err => {
        dispatch(TASKS.hideLoader());
        console.log(err);
        Util.showToast('Something went wrong');
      },
    );
  };
};

export const Social = params => {
  console.log("params", params)
  return dispatch => {
    dispatch(TASKS.showLoader());
    Util.postRequestWithFormData(
      Util.endPoints.Social,
      params,
      result => {
        dispatch(TASKS.hideLoader());
        console.log('result', result);
        if (result.status && result.status == 200) {
          result.json().then(data => {
            console.log(data);
            if (data && data.status == true) {
              data.data.user.token = data.data.user_access_token;
              dispatch({
                type: TYPES.ADD_USER,
                user: data.data.user,
              });
              console.log('Social Signup Complete');
              RootNavigation.navigate('Explore');
            } else {
              try {
                if (data.errors) {
                  Util.showToast(data.errors.error, 2000);
                }
              } catch (error) {}
            }
          });
        } else {
          // Util.showToast ('Unable to Social Login!');
          alert('Error');
        }
      },
      err => {
        dispatch(TASKS.hideLoader());
        console.log(err);
        Util.showToast('Something went wrong');
      },
    );
  };
};

export const ProfileUpdate = (params, token) => {
  console.log('parmas here', params, token);
  var formData = new FormData();
  formData.append('first_name', params.first_name);
  formData.append('last_name', params.last_name);
  formData.append('gender', params.gender);
  formData.append('dob', params.date_of_birth);
  formData.append('phone_number', params.phone_number);
  return dispatch => {
    console.log('got it');
    dispatch(TASKS.showLoader());
    Util.postRequestWithTokenandFormData(
      Util.endPoints.ProfileUpdate,
      formData,
      token,
      result => {
        console.log(result);
        dispatch(TASKS.hideLoader());
        if (result.status == 200) {
          result.json().then(data => {
            console.log(data);
            if (data.status) {
              dispatch({
                type: TYPES.UPDATE_PROFILE,
                payload: params,
              });
              Util.showToast('Profile Updated!');
            } else {
              Util.showToast(data.errors.error);
            }
          });
        } else {
          Util.showToast('Unable to Update Profile!');
          // throw result;
        }
      },
      err => {
        dispatch(TASKS.hideLoader());
        console.log(err);
        Util.showToast('Something went wrong');
      },
    );
  };
};

export const GovernmentID = (params, token) => {
  console.log('parmas here', params, token);
  return dispatch => {
    dispatch(TASKS.showLoader());
    Util.postRequestWithTokenandFormData(
      Util.endPoints.GovernmentId,
      params,
      token,
      result => {
        console.log(result);
        dispatch(TASKS.hideLoader());
        if (result.status == 200) {
          result.json().then(data => {
            console.log(data);
            if (data.status) {
              dispatch({
                type: TYPES.GOVERNMENT_ID,
              });
            } else {
              Util.showToast(data.errors.error);
            }
          });
        } else {
          Util.showToast('internal error');
          // throw result;
        }
      },
      err => {
        dispatch(TASKS.hideLoader());
        console.log(err);
        Util.showToast('Something went wrong');
      },
    );
  };
};

export const SignOut = () => {
  return dispatch => {
    dispatch({
      type: TYPES.SIGNOUT,
    });
    RootNavigation.navigate('Explore');
  };
};
