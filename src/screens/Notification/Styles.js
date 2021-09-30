import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  backBtn: { 
    marginTop: hp('5%'),
  },
  notificationTxt: {
      fontSize: 30,
      color: '#414141',
      marginTop: hp('6%'),
      fontWeight: 'bold',
  },
  messagesTxt: {
    fontSize: 14,
    color: '#414141',
    marginTop: hp('6%'),
    fontWeight: 'bold',
  },
  messageLineTxt: {
    fontSize: 13,
    color: '#000000',
    marginTop: hp('1%'),
    marginHorizontal: wp('0.5%'),
    fontWeight: 'bold',
  },
  toggleView: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    justifyContent: 'space-between',
  },
  emailTxt: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  
});

export default styles;