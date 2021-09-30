import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create ({
  amenityBtn: {
    flexDirection: 'row',
    padding: 6,
    borderRadius: 40,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#ABABAB',
    margin: 2,
    },
    aminityTxt: { 
      color: '#ABABAB', 
      fontWeight: 'bold', 
      fontSize: 13,
    },
})

export default styles;