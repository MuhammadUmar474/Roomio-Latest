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
  headingTxt: {
    fontSize: 25,
    color: '#414141',
    marginTop: hp('4%'),
    fontWeight: 'bold',
  },
  smallHeadingTxt: {
    fontSize: 12,
    color: '#414141',
    fontWeight: 'bold',
  },
  buttonNext: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    marginRight: wp('3%'),
    marginVertical: hp('5%'),
    backgroundColor: '#EE2073',
  },
  nextTxt: { 
    color: 'white', 
    fontSize: 13, 
    alignItems: 'center', 
    marginTop: hp('1%'),
  },
  belowHeadingTxt: {
    marginTop: hp('1%'),
    fontSize: 12,
    color: '#414141',
  },
  confirmView: {
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  checkstxt: {
    marginTop: hp('0.5%'),
    marginLeft: wp('2%'),
    fontSize: 12,
    color: '#414141',
  },
  additionalTxt: {
    marginTop: hp('5%'),
    fontSize: 14,
    color: '#414141',
    fontWeight: 'bold',
  },
  toggleView: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    justifyContent: 'space-between',
  },
  idTxt: {
    marginTop: hp('0.5%'),
    fontSize: 14,
    color: '#000000',
  }
});

export default styles;