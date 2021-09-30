import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: hp('33%'),
    paddingHorizontal: wp('4%')
  },
  dot: {
    color: 'white',
    fontSize: hp('5%'),
  },
  activeDot: {
    color: '#41BBB5',
    fontSize: hp('5%'),
  },
  starContainer: {
    flexDirection: 'row', 
    marginTop: hp('4%'), 
    marginLeft: wp('35%'), 
    color: '#41BBB5'
  },
  lastStar: {
    flexDirection: 'row', 
    marginTop: hp('1%'),  
    color: '#41BBB5'
  },
  buttonFilter: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    marginLeft: wp('35%'),
    backgroundColor: '#EE2073',
  },
  moreLessTxt: { 
    fontSize: 12, 
    color: '#41BBB5',
  },
  backBtn: { 
    position: 'absolute', 
    padding: '2%', 
    marginLeft: wp('5%'), 
    marginTop: hp('2%'),
  },
  shareIcon: { 
    position: 'absolute', 
    padding: '2%', 
    marginLeft: wp('83%'), 
    marginTop: hp('2%'),
  },
  heartIcon: { 
    position: 'absolute', 
    padding: '2%', 
    marginLeft: wp('90%'),
    marginTop: hp('2%'),
  },
  priceView: { 
    position: 'absolute', 
    backgroundColor: '#41BBB5',
    marginTop: hp('34%'), 
    height: hp('6%'), 
    width: wp('28%'), 
    borderTopRightRadius: 10, 
    justifyContent: 'center',
  },
  priceTxt: { 
    fontSize: 14, 
    color: 'white',
    marginLeft: hp('1%'),
  },
  descriptionTxt: { 
    fontSize: 20, 
    fontWeight: 'bold',
  },
  detailsTxt: { 
    marginTop: hp('1%'), 
    fontSize: 12, 
    color: '#414141', 
    padding: 10,
  },
  cardView: { 
    height: hp('15%'), 
    backgroundColor: '#EFF2F7', 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  img: { 
    borderRadius: 30, 
    height: 60, 
    width: 60,
  },
  nameTxt: { 
    fontSize: 14, 
    color: '#414141', 
    fontWeight: 'bold',
  },
  bottomLine: { 
    marginTop: hp('3%'), 
    borderBottomColor: '#414141', 
    borderBottomWidth: 0.5, 
    marginRight: wp('5%'),
  },
  bedView: { 
    height: hp('10%'), 
    width: wp('25%'), 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 10, 
    backgroundColor: 'white',
  },
  singleBedView: { 
    height: hp('10%'), 
    width: wp('25%'), 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 10, 
    backgroundColor: 'white', 
    marginLeft: wp('5%'),
  },
  locationTxt: {
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#414141',
  },
  selectedLocationTxt: { 
    fontSize: 14, 
    color: '#414141',
  },
  checkInTimeTxt: { 
    fontSize: 12, 
    color: '#535353', 
    marginLeft: wp('37%'),
  },
  checkOutTimeTxt: { 
    fontSize: 12, 
    color: '#535353', 
    marginLeft: wp('61%'),
  },
  reviewsView: { 
    marginTop: hp('2%'), 
    flexDirection: 'row', 
    marginLeft: wp('48%'),
  },
  bookNowView: { 
    flexDirection: 'row', 
    marginLeft: wp('5%'), 
    marginVertical: hp('2%'),
  },
  finalPriceTxt: { 
    fontSize:12, 
    color: '#414141', 
    fontWeight: 'bold',
  },
  bookNowTxt: { 
    color: 'white', 
    fontSize: 13, 
    alignItems: 'center', 
    marginTop: hp('1%'),
  },
});

export default styles;