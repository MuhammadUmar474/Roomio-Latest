import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    height: hp('38%'), 
    width: wp('44%'), 
    margin: wp('1.5%'),
  },
  sliderView: { 
    flex: 2, 
    marginLeft: wp('1%'),
  },
  sliderBox: { 
    width: wp('42%'), 
    height: hp('38%'), 
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: hp('5%'),
  },
  activeDot: {
    color: '#FFF',
    fontSize: hp('5%'),
  },
  cityTxt: { 
    fontWeight: 'bold', 
    fontSize: 10,
  },
  starRatingView: { 
    flexDirection: 'row', 
    marginTop: 5, 
    color: '#41BBB5',
  },
  descriptionTxt: { 
    fontWeight: 'bold', 
    marginTop: hp('0.2%'), 
    fontSize: 14,
  },
  totalPrieTxt: { 
    fontWeight: 'bold', 
    marginTop: hp('0.2%'), 
    color: '#41BBB5', 
    fontSize: 12,
  },
});

export default styles;