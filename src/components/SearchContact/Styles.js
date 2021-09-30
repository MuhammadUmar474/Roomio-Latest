import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  mainSearchView: { 
    height: hp('7%'), 
    width: wp('90%'), 
    marginTop: hp('5%'), 
    marginHorizontal: wp('5%'),
  },
  searchView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
    },
    icon: { 
      marginTop: ('3.5%'), 
      marginLeft: wp('3%'),
    },
    input: { 
      flex: 1, 
      fontSize: 14, 
      backgroundColor: 'white', 
      color: '#ABABAB', 
      marginLeft: wp('1%'),
    },
});

export default styles;