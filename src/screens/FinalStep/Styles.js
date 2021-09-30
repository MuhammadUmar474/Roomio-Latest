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
  requirementsContainer: { 
    flexDirection: 'row', 
    marginTop: hp('5%'), 
    justifyContent: 'space-between'
  },
  smallHeadingsTxt: {
    fontSize: 14,
    color: '#414141',
  },
  subHeadingsTxt: {
    fontSize: 12,
    color: '#000000',
  },
  editTxt: {
    fontSize: 14,
    color: '#EE2073',
  },
  buttonNext: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    marginRight: wp('3%'),
    marginVertical: hp('6%'),
    backgroundColor: '#EE2073',
  },
  nextTxt: { 
    color: 'white', 
    fontSize: 13, 
    alignItems: 'center', 
    marginTop: hp('1%'),
  },
});

export default styles;