import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    width: wp('100%'),
    height: hp('28%'),
    backgroundColor: '#41BBB5',
  },
  buttonViewProfile: {
    width: wp('25%'),
    padding: 4,
    borderRadius: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    margin: wp('2%')
  },
  accountTxt: { 
    fontSize: 14, 
    color: '#000000', 
    fontWeight: 'bold',
  },
  splTxt: { 
    fontSize: 14, 
    color: '#000000', 
    fontWeight: 'bold', 
    marginTop: hp('3%'),
  },
  underHeadingView: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: hp('1%'),
  },
  underHeadingTxt: { 
    fontSize: 14, 
    color: '#000000',
  },
  backBtn: { 
    padding: '2%', 
    marginLeft: wp('3%'), 
    marginTop: hp('2%'),
  },
  profileTxt: { 
    fontSize: 20, 
    color: '#FFFFFF', 
    marginLeft: wp('27%'), 
    marginTop: hp('3%'), 
    fontWeight: 'bold',
  },
  logoutTxt: { 
    fontSize: 14, 
    color: '#EE2073',
  },
  switchAccountView: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: hp('3%'),
  },
  nameTxt: { 
    fontSize: 20, 
    color: '#FFFFFF', 
    fontWeight: 'bold',
  },
  dateTxt: { 
    fontSize: 14, 
    color: '#FFFFFF',
  },
  viewProfileTxt: { 
    color: '#FFFFFF', 
    fontSize: 12,
  },
});

export default styles;