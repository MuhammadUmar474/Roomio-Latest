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
  listPlaceTxt: {
    fontSize: 25,
    color: '#414141',
    marginTop: hp('6%'),
    fontWeight: 'bold',
  },
  choosePropertyTxt: {
    fontSize: 12,
    color: '#535353',
    marginTop: hp('6%'),
    fontWeight: 'bold',
  },
  textInput: {
    width: wp('90%'),
    elevation: 3,
    borderRadius: 40,
    backgroundColor: 'white',
    marginTop: hp('1%'),
    margin: 2,
  },
  textInputStyle: {
    marginLeft: wp('5%'),
    fontSize: 15,
  },
  mainOfferView: {
    marginTop: hp('3%'),
  },
  offerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallHeadingTxt: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  radioBtn: { 
    marginTop: hp('2.3%'), 
    height:"100%",
    position:"absolute",
    right:0,
    textAlign:"center"
  },
  guestLineTxt: {
    fontSize: 11,
    color: '#4A4A4A',
    // marginTop: hp('-5%')
  },
  guestView: {
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
  errMsg: {
    color: '#EE2073',
  },
  errMsg1: {
    color: '#EE2073',
    marginTop: -hp('1.5%')
  },
});

export default styles;