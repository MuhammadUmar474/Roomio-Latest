import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  buttonFilter: {
    width: 15,
    height: 15,
    borderRadius: 7,
    marginLeft: wp('40%'),
    alignItems: 'center',
    backgroundColor: '#EE2073',
  },
  itemMainView: { 
    marginTop: hp('3%'), 
    flexDirection: 'row', 
    marginHorizontal: wp('5%'),
  },
  img: { 
    borderRadius: 25, 
    height: 50, 
    width: 50,
  },
  userNameView: { 
    width: wp('70%'), 
    marginLeft: wp('3%'), 
    marginTop: hp('1%'), 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  nameTxt: { 
    fontSize: 14, 
    color: '#414141', 
    fontWeight: 'bold',
  },
  dayTxt: { 
    fontSize: 10, 
    color: '#8F8F8F', 
    marginTop: hp('0.5%'),
  },
  msgView: { 
    marginLeft: wp('3%'), 
    flexDirection: 'row',
  },
  msg: { 
    fontSize: 14,
    color: "#8F8F8F",
  },
  dayTxt: { 
    fontSize: 14, 
    color: '#8F8F8F',
  },
  bottomLine: { 
    marginTop: hp('3%'), 
    borderBottomColor: '#414141', 
    borderBottomWidth: 0.3,
  },
});

export default styles;