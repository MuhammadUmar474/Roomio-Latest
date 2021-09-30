import * as TYPES from '../../types';

const initialState = {
  user: null,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADD_USER:
      return {
        ...state,
        user: actions.user,
      };

    case TYPES.SIGNOUT:
      return {
        ...state,
        user: null,
      };
    case TYPES.UPDATE_PROFILE:
      const data = {...state};
      const payload = actions.payload;
      return {
        ...state,
        user: {
          ...data.user,
          first_name: payload.first_name,
          last_name: payload.last_name,

          ['user_info']: {
            ...data.user.user_info,
            gender: payload.gender,
            date_of_birth: payload.date_of_birth,
            phone_number: payload.phone_number,
          },
        },
      };
    case TYPES.GOVERNMENT_ID:
      const State = {...state};
      return {
        ...State,
        user: {
          ...State.user,
          verified: 1,
        },
      };

    default:
      return state;
  }
};
export default reducer;
