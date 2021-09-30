import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
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
});

export default styles;