import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    height: hp('38%'), 
    width: wp('44%'), 
    margin: wp('1.5%'),
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
  centeredView: {
    flex: 1,
    marginTop: hp('3.5%'),
    alignItems: 'center',
  },
  modalView: {
    height: hp('85%'),
    width: wp('90%'),
    backgroundColor: "white",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonCalender: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#EE2073',
  },
  buttonFilter: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    backgroundColor: '#EE2073',
  },
  buttonFilterCalender: {
    width: wp('30%'),
    height: hp('6%'),
    marginLeft: wp('40%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    backgroundColor: '#EE2073',
  },
  buttonPositive: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE2073',
    borderColor: '#EE2073'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  buttonNegative: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EE2073'
  },
  modelBtnView: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: hp('-4%'),
  },
  filterTxt: { 
    fontSize: 13, 
    color: '#414141', 
    fontWeight: 'bold', 
    marginTop: 2,
  },
  resetTxt: {
    fontSize: 14, 
    color: '#414141', 
    marginTop: 2,
  },
  properTypeTxt: { 
    fontSize: 16, 
    color: '#414141', 
    fontWeight: 'bold', 
    marginTop: hp('1%'),
  },
  properTypeView: {
    flexDirection: 'row', padding: 5,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 40
    },
    propertyPlaceHolder: { 
      flex: 1, 
      fontWeight: '700', 
      backgroundColor: 'white', 
      color: '#ABABAB',
    },
    priceRangeView: { 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    priceRangeTxt: { 
      fontSize: 16, 
      fontWeight: 'bold', 
      color: '#414141',
    },
    availabilityTxt: { 
      fontSize: 16, 
      fontWeight: 'bold', 
      marginTop: hp('1%'), 
      color: '#414141',
    },
    checkInView: { 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    checkInTxt: { 
      fontSize: 14, 
      marginTop: hp('1.5%'), 
      color: '#414141',
    },
    showCalenderTxt: { 
      color: 'white', 
      fontSize: 13, 
      alignItems: 'center', 
      marginTop: hp('1%'),
    },
    roomsTxt: { 
      fontSize: 16, 
      fontWeight: 'bold', 
      marginTop: hp('2%'), 
      color: '#414141',
    },
    rbbTxt: { 
      fontSize: 14, 
      color: '#414141',
    },
    btnView: { 
      flexDirection: 'row', 
      alignItems: 'center',
    },
    btnTxt: { 
      fontSize: 12, 
      color: '#EE2073',
    },
    rbb1Txt: { 
      marginHorizontal: 10, 
      fontSize: 16,
    },
    plusTxt: { 
      fontSize: 12, 
      color: 'white',
    },
    cancelSaveView: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginTop: hp('7%'),
    },
    cancelTxt: { 
      fontSize: 14, 
      color: '#414141', 
      marginTop: 2,
    },
    saveTxt: { 
      color: 'white', 
      fontSize: 13, 
      alignItems: 'center', 
      marginTop: hp('1%'),
    },
    applyFilterTxt: { 
      color: 'white', 
      fontSize: 13, 
      alignItems: 'center', 
      marginTop: hp('1%'),
    },
    heartIcon: { 
      position: 'absolute', 
      padding: '2%', 
      marginLeft: wp('38%'),
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
    descTxt: { 
      fontWeight: 'bold',
      marginTop: hp('0.2%'), 
      fontSize: 14,
    },
    priceTxt: { 
      fontWeight: 'bold', 
      marginTop: hp('0.2%'), 
      color: '#41BBB5', 
      fontSize: 12,
    },
});

export default styles;