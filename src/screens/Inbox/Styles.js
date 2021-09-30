import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  buttonFilter: {
    width: 15,
    height: 15,
    borderRadius: 7,
    marginLeft: wp('40%'),
    alignItems: 'center',
    backgroundColor: '#EE2073',
  },
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  backButton: { 
    padding: '2%', 
    marginLeft: wp('3%'), 
    marginTop: hp('2%'),
  },
  messageTxt: { 
    fontSize: 20, 
    color: '#414141', 
    marginLeft: wp('23%'), 
    marginTop: hp('2.5%'), 
    fontWeight: 'bold',
  },
  unreadMsg: { 
    marginHorizontal: wp('5%'), 
    marginTop: hp('15%'),
  },
  unreadTxt: { 
    fontSize: 16, 
    color: '#535353', 
    fontWeight: 'bold',
  },
  img: { 
    borderRadius: 25, 
    height: 50, 
    width: 50,
  },
  chatView: { 
    marginTop: hp('3%'), 
    flexDirection: 'row',
  },
  userView: { 
    marginLeft: wp('3%'), 
    marginTop: hp('1%'), 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameTxt: { 
    fontSize: 14, 
    color: '#414141', 
    fontWeight: 'bold',
  },
  dayTxt: { 
    fontSize: 10, 
    color: '#8F8F8F',
    marginRight: wp('1%')
  },
  btnView: { 
    marginLeft: wp('3%'), 
    flexDirection: 'row',
  },
  seeYouTxt: { 
    fontSize: 14, 
    color: '#8F8F8F'
  },
  numTxt: { 
    color: 'white', 
    fontSize: 12, 
    alignItems: 'center',
  },
  bottomLine: { 
    marginTop: hp('3%'), 
    borderBottomColor: '#414141', 
    borderBottomWidth: 0.3,
  },
  allMsgView: { 
    marginHorizontal: wp('5%'), 
    marginTop: hp('3%'),
  },
});

export default styles;