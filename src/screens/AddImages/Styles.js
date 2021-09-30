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
  belowHeadingTxt: {
    marginTop: hp('1%'),
    fontSize: 12,
    color: '#414141',
  },
  smallHeadingTxt: {
    marginTop: hp('-1%'),
    fontSize: 12,
    color: '#414141',
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height: hp('25%'),
    width: wp('50%'),
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImg: {
    marginTop: hp('5%'),
    width: wp('30%'),
    height: wp('50%'),
    // maxHeight: 240,
    resizeMode: 'contain',
  },
  cancelIcon: { 
    position: 'absolute', 
    top:3,
    right: -hp('4%'),
    padding: hp('5%'),

  },
  errMsg: {
    alignSelf: 'center',
    color: 'red',
  },
});

export default styles;