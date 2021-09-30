import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    marginTop: hp('4%'),
    marginLeft: wp('4%'),
    color: '#414141',
  },
  buttonLogin: {
    width: wp('90%'),
    backgroundColor: '#EE2073',
    padding: 12,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
  },
  formView: {
    marginTop: hp('3%'),
  },
  backBtn: { 
    marginTop: hp('5%'),
    marginLeft: wp('4%'),
  },
  iconContainer: {
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop: hp('0.5%'),
    marginLeft: wp('1%')
  },
  socialIconsStyle: {
    color: 'blue',
    margin: 10,
  },
  noAccount: {
    marginTop: hp('5%'),
    justifyContent: 'center',
    fontSize: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logInTxt: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 15
  },
  logInSocialTxt: { 
    fontWeight: 'bold', 
    fontSize: 15, 
    marginTop: hp('2%'), 
    marginLeft: wp('22%'),
  },
  signUpTxt: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    color: '#41BBB5',
  },
});

  export default styles;