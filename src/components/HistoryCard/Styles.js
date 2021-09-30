import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('45%'), 
    width: wp('95%'), 
    margin: hp('0.5%'), 
    marginLeft: wp('2%'), 
    padding: 10,
    shadowOffset: { width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
  },
  cityName: {
    fontWeight: 'bold', 
    marginLeft: wp('1%'), 
    marginTop: hp('0.5%'), 
    color: '#EE2073', 
    fontSize: 12
  },
  description: {
    fontWeight: 'bold', 
    marginLeft: wp('1%'), 
    marginTop: hp('0.5%'), 
    fontSize: 14
  },
  addressTxt: {
    fontSize: 12,
    color: '#414141'
  },
  price: {
    fontWeight: 'bold', 
    marginLeft: wp('1%'), 
    marginTop: hp('0.5%'), 
    color: '#41BBB5', 
    fontSize: 12
  },
  starContainer: {
    flexDirection: 'row', 
    marginTop: 7, 
    marginLeft: wp('37%'), 
    color: '#41BBB5'
  },
  wordView: { 
    position: 'absolute', 
    backgroundColor: '#41BBB5',
    alignSelf: 'flex-end', 
    height: hp('6%'), 
    width: wp('28%'), 
    borderBottomLeftRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  wordTxt: { 
    fontSize: 14, 
    color: 'white',
  },

});

export default styles;