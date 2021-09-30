import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Styles';
import {connect} from 'react-redux';
import * as TASKS from '../../store/actions';
import * as Util from '../../store/utils';

const Settings = ({user, navigation, Logout, loader}) => {
  const OnLogOut = () => {
    Logout();
  };
  if (loader)
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {Util.Lumper()}
      </View>
    );
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('Explore')}>
            <FontAwesome name={'long-arrow-left'} size={20} color={'white'} />
          </TouchableOpacity>

          <Text style={styles.profileTxt}>Profile</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: hp('3%')}}>
          <View style={{marginLeft: wp('3%')}}>
            <Image
              source={require('../../assets/images/chinies.jpg')}
              style={{borderRadius: 30, height: 60, width: 60}}
            />
          </View>
          <View style={{marginLeft: wp('4%')}}>
            <Text style={styles.nameTxt}>
              {user.first_name} {user.last_name}
            </Text>
            <Text style={styles.dateTxt}>{user.updated_at}</Text>
          </View>
          <View style={{marginLeft: wp('3%')}}>
            <TouchableOpacity
              style={styles.buttonViewProfile}
              onPress={() => navigation.navigate('ProfileView')}>
              <Text style={styles.viewProfileTxt}>view profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        style={{marginHorizontal: hp('3%'), marginVertical: wp('5%')}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.accountTxt}>ACCOUNT</Text>

        <View style={styles.underHeadingView}>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.underHeadingTxt}>Edit Profile</Text>
          </TouchableOpacity>

          <FontAwesome name={'user'} size={15} />
        </View>

        <View style={styles.underHeadingView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Text style={styles.underHeadingTxt}>Notifications</Text>
          </TouchableOpacity>

          <FontAwesome name={'bell-o'} size={15} />
        </View>

        <Text style={styles.splTxt}>SUPPORT</Text>

        <View style={styles.underHeadingView}>
          <TouchableOpacity
          // onPress={}
          >
            <Text style={styles.underHeadingTxt}>Get Help</Text>
          </TouchableOpacity>

          <FontAwesome name={'info-circle'} size={15} />
        </View>

        <View style={styles.underHeadingView}>
          <TouchableOpacity
          // onPress={}
          >
            <Text style={styles.underHeadingTxt}>Give us feedback</Text>
          </TouchableOpacity>

          <FontAwesome name={'clipboard'} size={15} />
        </View>

        <Text style={styles.splTxt}>HOSTING</Text>

        <View style={styles.underHeadingView}>
          <TouchableOpacity onPress={() => navigation.navigate('Add Listing')}>
            <Text style={styles.underHeadingTxt}>Become a Host</Text>
          </TouchableOpacity>

          <FontAwesome name={'info-circle'} size={15} />
        </View>

        <Text style={styles.splTxt}>LEGAL</Text>

        <View style={styles.underHeadingView}>
          <TouchableOpacity
          // onPress={}
          >
            <Text style={styles.underHeadingTxt}>Terms of Services</Text>
          </TouchableOpacity>

          <FontAwesome name={'info-circle'} size={15} />
        </View>

        <View style={{marginTop: hp('2%')}}>
          <TouchableOpacity onPress={OnLogOut}>
            <Text style={styles.logoutTxt}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.switchAccountView}>
          <TouchableOpacity
          // onPress={}
          >
            <Text style={styles.underHeadingTxt}>Switch Account</Text>
          </TouchableOpacity>

          <FontAwesome
            name={'info-circle'}
            size={15}
            style={{marginTop: hp('1%')}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    login: params => dispatch(TASKS.Login(params)),
    Social: param => dispatch(TASKS.Social(param)),
    Logout: () => dispatch(TASKS.SignOut()),
  };
};

const mapStateToProps = state => {
  console.log('Login state', state.auth);
  return {
    user: state.auth.user,
    loader: state.ui.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
