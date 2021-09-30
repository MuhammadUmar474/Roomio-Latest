import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    width: wp('100%'),
    height: hp('15%'),
    backgroundColor: '#41BBB5',
  },
  buttonViewProfile: {
    width: wp('25%'),
    padding: 4,
    borderRadius: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    margin: wp('2%')
  },
  profileImage: {
    borderRadius: 35, 
    height: 70, 
    width: 70, 
    borderWidth: 3, 
    borderColor: '#ffffff',
  },
  reviewsContainer: {
    // flexDirection: 'row',
    marginTop: hp('3%'),  
    marginLeft: wp('4%'),
  },
  starContainer: {
    flexDirection: 'row', 
    marginTop: 7, 
    marginLeft: wp('25%'),
    marginTop: hp('4%'),
    color: '#41BBB5'
    },
  readLessMoreTxt: { 
    fontSize: 12, 
    color: '#41BBB5',
  },
  backButton: { 
    padding: '2%', 
    marginLeft: wp('3%'), 
    marginTop: hp('2%'),
  },
  profileTxt: { 
    fontSize: 20, 
    color: '#FFFFFF', 
    marginLeft: wp('27%'), 
    marginTop: hp('3%'), 
    fontWeight: 'bold',
  },
  profileImageView: { 
    marginLeft: wp('36%'), 
    marginTop: hp('1%'),
  },
  userNameTxt: { 
    fontSize: 20, 
    color: '#414141', 
    fontWeight: 'bold',
  },
  joinDateTxt: { 
    fontSize: 14, 
    color: '#414141', 
  },
  iconsView: { 
    flexDirection: 'row', 
    marginTop: hp('5%'),
  },
  verifiedTxt: { 
    fontSize: 14, 
    color: '#414141', 
    marginLeft: wp('1%'),
  },
  reviewsTxt: { 
    fontSize: 14, 
    color: '#414141', 
    marginLeft: wp('1%'),
  },
  aboutTxt: { 
    fontSize: 14, 
    color: '#000000', 
    fontWeight: 'bold', 
    marginTop: hp('23%'),
    marginLeft: wp('4%'),
  },
  paragraphTxt: { 
    marginTop: hp('1%'), 
    fontSize: 12, 
    color: '#414141', 
    padding: 10,
  },
  shortHeadingTxt: { 
    fontSize: 14, 
    color: '#000000', 
    fontWeight: 'bold', 
    marginTop: hp('3%'),
    marginLeft: wp('4%'),
  },
  reviewsTxtView: { 
    height: hp('3%'), 
    marginTop: hp('2.6%'), 
    position: 'absolute', 
    zIndex: 1,
  },
  phoneNumberTxt: { 
    fontSize: 14, 
    color: '#414141', 
    marginLeft: wp('1%'),
  },
});

export default styles;