import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    marginTop: hp('3%'),
    marginLeft: wp('6%'),
    color: '#414141',
  },
  buttonSignUp: {
    width: wp('90%'),
    backgroundColor: '#EE2073',
    padding: 12,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('0.5%'),
  },
  socialIconsStyle: {
    color: 'blue',
    margin: 10,
  },
  noAccount: {
    marginTop: hp('0.5%'),
    justifyContent: 'center',
    fontSize: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  signUpSocialTxt: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: hp('2%'),
    marginLeft: wp('22%'),
  },
  signInTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#41BBB5',
  },
  signUpTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  err: {
    color: '#EE2073',
    fontSize: wp(3),
    marginHorizontal: 20,
  },
});

export default styles;
