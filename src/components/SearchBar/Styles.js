import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  searchView: {
    flexDirection: 'row', 
    padding: 5,
    backgroundColor: 'white', 
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
    },
    placeholderTxt: { 
      flex: 1, 
      fontWeight: '700', 
      backgroundColor: 'white', 
      color: '#ABABAB',
    },
    icon: { 
      marginTop: hp('1.5%'),
      marginRight: wp('1%'),
    },
});

export default styles;