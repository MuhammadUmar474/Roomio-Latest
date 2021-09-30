import React, {useState, useEffect, createRef} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import styles from './Styles';
import * as TASKS from '../../store/actions';
import {connect} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import * as Navigation from '../../navigation/RootNavigation';
import * as Util from '../../store/utils';

const Signup = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');
  
  const [firstNameError, setFirstNameError] = useState({error: false, msg: ''});
  const [lastNameError, setLastNameError] = useState({error: false, msg: ''});
  const [EmailError, setEmailError] = useState({error: false, msg: ''});
  const [PassError, setPassError] = useState({error: false, msg: ''});
  const [confirmPassError, setConfirmPassrror] = useState({error: false, msg: ''});

  const lastNameref = React.useRef(null);
  const emailNameref = React.useRef(null);
  const passNameref = React.useRef(null);
  const confirmPassRef = React.useRef(null);

  const SignUp = () => {
    if (firstName && lastName && email && password && confirmPassword) {
      if (Util.emailValidator(email)) {
        var formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('confirmed', confirmPassword);
        props.signUp(formData);
      } else {
        setEmailError({
          error: true,
          msg: 'Please provide a valid Email address',
        });
      }
    } else {
      if (!firstName) {
        setFirstNameError({error: true, msg: 'Please provide first name'});
      }
      if (!lastName) {
        setLastNameError({error: true, msg: 'Please provide last name'});
      }
      if (!email) {
        setEmailError({
          error: true,
          msg: 'Please provide a valid Email address',
        });
      }
      if (!password) {
        setPassError({error: true, msg: 'Please provide a password'});
      }
      if (password && password != confirmPassword) {
        setConfirmPassrror({error: true, msg: 'Password did not match!'});
      }
    }
  };

  const submitEditing = ref => {
    return ref.current?.focus();
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '901333087985-0oerkcgeiu2gqmr1ordr6ud73cpcem36.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false,
    });
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(googleCredential);
    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(data => {
        console.log(data);
        if (data.additionalUserInfo.profile) {
          const {
            given_name,
            family_name,
            email,
            sub,
          } = data.additionalUserInfo.profile;
          const form_data = new FormData();
          form_data.append('first_name', given_name);
          form_data.append('last_name', family_name);
          form_data.append('email', email);
          form_data.append('provider', 'google');
          form_data.append('provider_id', sub);
          props.Social(form_data);
        }
      });
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(facebookCredential)
      .then(data => {
        console.log(data);
        if (data.additionalUserInfo) {
          const {
            first_name,
            last_name,
            email,
            id,
          } = data.additionalUserInfo.profile;
          const form_data = new FormData();
          form_data.append('first_name', first_name);
          form_data.append('last_name', last_name);
          form_data.append('email', email);
          form_data.append('provider', 'facebook');
          form_data.append('provider_id', id);
          props.Social(form_data);
        }
      });
  }

  if (props.loader)
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {Util.Lumper()}
      </View>
    );
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.textHeader}>Signup To Join Us</Text>

      <FormInput
        placeholderText="First Name"
        value={firstName}
        onchange={setFirstName}
        returnKeyType="next"
        onSubmitEditing={() => submitEditing(lastNameref)}
      />
      {firstNameError.error && (
        <Text style={styles.err}>{firstNameError.msg}</Text>
      )}

      <FormInput
        placeholderText="Last Name"
        value={lastName}
        onchange={setLastName}
        returnKeyType="next"
        ref={lastNameref}
        onSubmitEditing={() => submitEditing(emailNameref)}
      />
      {lastNameError.error && (
        <Text style={styles.err}>{lastNameError.msg}</Text>
      )}

      <FormInput
        placeholderText="Email"
        value={email}
        onchange={setEmail}
        keyboardType={'email-address'}
        returnKeyType="next"
        ref={emailNameref}
        onSubmitEditing={() => submitEditing(passNameref)}
      />
      {EmailError.error && <Text style={styles.err}>{EmailError.msg}</Text>}
      <FormInput
        placeholderText="Password"
        value={password}
        onchange={setPassword}
        returnKeyType="next"
        secureTextEntry={true}
        ref={passNameref}
        onSubmitEditing={() => submitEditing(confirmPassRef)}
      />
      {PassError.error && <Text style={styles.err}>{PassError.msg}</Text>}

      <FormInput
        placeholderText="Confirm Password"
        value={confirmPassword}
        onchange={setComfirmPassword}
        returnKeyType="done"
        secureTextEntry={true}
        ref={confirmPassRef}
      />

      {confirmPassError.error && (
        <Text style={styles.err}>{confirmPassError.msg}</Text>
      )}

      <TouchableOpacity style={styles.buttonSignUp} onPress={SignUp}>
        <Text style={styles.signUpTxt}>SIGNUP</Text>
      </TouchableOpacity>

      <Text style={styles.signUpSocialTxt}>Or Signup using social account</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onFacebookButtonPress}>
          <FontAwesome
            style={styles.socialIconsStyle}
            name={'facebook-square'}
            size={40}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome
            style={styles.socialIconsStyle}
            name={'twitter-square'}
            size={40}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onGoogleButtonPress}>
          <FontAwesome
            style={styles.socialIconsStyle}
            name={'google'}
            size={40}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.noAccount}>
        <Text style={{fontSize: 15}}>Already have account?</Text>
        <TouchableOpacity onPress={() => Navigation.navigate('Sign in')}>
          <Text style={styles.signInTxt}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    loader: state.ui.isLoading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: params => dispatch(TASKS.SignUp(params)),
    Social: param => dispatch(TASKS.Social(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
