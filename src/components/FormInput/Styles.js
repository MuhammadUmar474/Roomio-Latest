import { StyleSheet,Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {width} = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white',
    width:width,
  },
  textInput: {
    flexDirection: 'row',
    width: width,
    elevation: 2,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: hp('3%'),
    marginHorizontal: wp('5%'),
  },
  iconStyle: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    marginLeft: 5,
    fontSize: 15,
    flex: 1,
  }
});

export default styles;