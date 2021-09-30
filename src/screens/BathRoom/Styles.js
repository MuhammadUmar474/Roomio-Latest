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
  buttonPositive: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE2073',
    borderColor: '#EE2073'
  },
  row: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  buttonNegative: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EE2073'
  },
  rbbTxt: { 
    fontSize: 14, 
    color: '#414141',
  },
  btnView: {
    marginRight: wp('2%'),
    flexDirection: 'row', 
    alignItems: 'center',
  },
  btnTxt: { 
    fontSize: 12, 
    color: '#EE2073',
  },
  rbb1Txt: { 
    marginHorizontal: 10, 
    fontSize: 16,
  },
  plusTxt: { 
    fontSize: 12, 
    color: 'white',
  },
  errMsg1: {
    color: 'red',
    marginTop: -hp('1.5%')
  },
});

export default styles;