import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: { 
    padding: '2%', 
    marginLeft: wp('3%'), 
    marginTop: hp('2%'),
  },
  TripTxt: { 
    fontSize: 20, 
    color: '#414141', 
    marginLeft: wp('32%'), 
    marginTop: hp('2.5%'), 
    fontWeight: 'bold',
  },
});

export default styles;