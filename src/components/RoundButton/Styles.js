import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create ({
  buttonLogin: {
    width: '22%',
    padding: 6,
    borderRadius: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ABABAB',
    marginHorizontal: wp('2%')
    },
    placeTxt: { 
      color: '#ABABAB', 
      fontWeight: 'bold', 
      fontSize: 13,
    },
})

export default styles;