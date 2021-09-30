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
  toggleView: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    justifyContent: 'space-between',
  },
  rulesTxt: {
    fontSize: 14,
    color: '#414141',
    fontWeight: 'bold',
  },
  additionalRulesTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#414141',
    marginTop: hp('3%'),
  },
  additionalNote: {
    width: wp('90%'),
    height: hp('15%'),
    elevation: 5,
    borderRadius: 20,
    borderRadius: 1,
    backgroundColor: 'white',
    marginTop: hp('1%')
  },
  buttonNext: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    marginRight: wp('3%'),
    marginVertical: hp('8%'),
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