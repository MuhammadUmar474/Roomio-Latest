import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import styles from './Styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import * as TASKS from '../../store/actions';
import * as Util from '../../store/utils';
import {connect} from 'react-redux';
import * as Navigation from '../../navigation/RootNavigation';

const login = ({Social, loader, login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passref = React.useRef(null);

  const Login = () => {
    if (email && password) {
      var formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      console.log('data hai login ka', formData);
      login(formData);
    }
  };
  useEffect(() => {
    Login();
  }, []);

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
          Social(form_data);
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
          Social(form_data);
        }
      });
  }

  const submitEditing = ref => {
    return ref.current?.focus();
  };

  if (loader)
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {Util.Lumper()}
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Welcome Back !</Text>

      <FormInput
        value={email}
        onchange={setEmail}
        returnKeyType={'next'}
        placeholderText="JohnDoe@gmail.com"
        iconType="person"
        returnKeyType="next"
        onSubmitEditing={() => submitEditing(passref)}
        keyboardType={'email-address'}
      />

      <FormInput
        value={password}
        onchange={setPassword}
        placeholderText="Password"
        secureTextEntry={true}
        iconType="lock-closed"
        ref={passref}
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={Login}>
        <Text style={styles.logInTxt}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.logInSocialTxt}>Or Login Using Social account</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onFacebookButtonPress}>
          <FontAwesome
            style={styles.socialIconsStyle}
            name={'facebook-square'}
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
        {/* <FontAwesome style={styles.socialIconsStyle} name={"twitter-square"} size={40} /> */}
      </View>

      <View style={styles.noAccount}>
        <Text style={{fontSize: 15}}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => Navigation.navigate('Sign up')}>
          <Text style={styles.signUpTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('Login state', state.auth);
  return {
    loader: state.ui.isLoading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: params => dispatch(TASKS.Login(params)),
    Social: param => dispatch(TASKS.Social(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);
