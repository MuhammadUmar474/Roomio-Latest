import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create ({
  mainView: { 
    flex: 1, 
    backgroundColor: '#fff',
  },
  cardRound: {
      width: wp('90%'),
      height: hp('8%'),
      marginTop: hp('1%'),
      marginLeft: wp('1%'),
      padding: 2,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#EE2073B3',
    },
    cardName: {
      width: wp('40%'),
      height: hp('8%'),
      padding: 2,
      borderRadius: 25,
      elevation: 5,
      backgroundColor: '#fff'
    },
    cardEXP: {
      width: wp('25%'),
      height: hp('8%'),
      padding: 2,
      borderRadius: 30,
      elevation: 5,
      backgroundColor: '#fff'
    },
    cardCVV: {
      width: wp('25%'),
      height: hp('8%'),
      padding: 2,
      borderRadius: 30,
      elevation: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
    },
    checkoutButton: {
      width: wp('90%'),
      height: hp('7%'),
      marginLeft: wp('1%'),
      borderRadius: 2,
      backgroundColor: '#EE2073',
      justifyContent: 'center',
      alignItems: 'center',
    },
    centeredView: {
      flex: 1,
      marginTop: hp('27%'),
      alignItems: 'center',
    },
    modalView: {
      height: hp('45%'),
      width: wp('90%'),
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
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
      padding: 15,
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
    buttonSave: {
      width: wp('25%'),
      height: hp('6%'),
      padding: 2,
      borderRadius: 2,
      alignItems: 'center',
      backgroundColor: '#EE2073',
    },
    backButtonView: { 
      height: hp('7%'), 
      backgroundColor: '#fff', 
      justifyContent: 'center', 
      elevation: 5,
    },
    backButton: { 
      justifyContent:'flex-start', 
      marginLeft: wp('2%'),
    },
    modelCloseButton: { 
      alignItems: 'flex-end', 
      padding: 5, 
      marginRight: wp('2%'),
    },
    cancelButtonView: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginHorizontal: wp('5%'), 
      marginTop: hp('2%'), 
      elevation: 5,
    },
    cancelTxt: { 
      fontSize: 14, 
      color: '#414141', 
      marginTop: 2,
    },
    applyFilterTxt: { 
      color: 'white', 
      fontSize: 13, 
      alignItems: 'center', 
      marginTop: hp('1%'),
    },
    cardView: { 
      marginHorizontal: wp('3%'), 
      marginTop: hp('4%'),
    },
    cardImg: { 
      height: 80, 
      width: 90, 
      borderRadius: 3,
    },
    descriptionLineTxt: { 
      fontSize: 15, 
      color: '#414141', 
      fontWeight: 'bold', 
      marginLeft: wp('1%'),
    },
    privateRoomTxt: { 
      fontSize: 12, 
      color: '#EE2073',
    },
    starRatingView: { 
      flexDirection: 'row', 
      marginTop: hp('1%'), 
      color: '#41BBB5',
      marginLeft: wp('1%'),
    },
    chargesTxt: { 
      fontSize: 14, 
      color: '#41BBB5', 
      fontWeight: '700', 
      marginTop: -5, 
      marginLeft: wp('30%'),
    },
    bottomLine: { 
      marginTop: hp('3%'), 
      borderBottomColor: '#414141', 
      borderBottomWidth: 0.2, 
      marginHorizontal: wp('4%'),
    },
    checkIncheckOutView: { 
      marginHorizontal: wp('4%'), 
      marginTop: hp('4%'), 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    checkIncheckOutTxt: { 
      fontSize: 10, 
      color: '#1D1D1D', 
      fontWeight: 'bold',
    },
    dateTxt: { 
      fontSize: 30, 
      color: '#41BBB5', 
      fontWeight: '700',
    },
    yearTxt: { 
      fontSize: 14, 
      color: '#414141',
    },
    dayTxt: { 
      fontSize: 10, 
      color: '#8F8F8F',
    },
    dateView: { 
      marginTop: hp('1%'), 
      marginLeft: wp('1%'),
    },
    guestView: { 
      marginHorizontal: wp('4%'), 
      marginTop: hp('4%'), 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    guestTxt: { 
      fontSize: 14, 
      color: '#535353', 
      fontWeight: 'bold',
    },
    guestBtnTxt: { 
      fontSize: 14, 
      color: '#41BBB5', 
      fontWeight: 'bold',
    },
    chargesDetailView: { 
      marginHorizontal: wp('3%'), 
      marginTop: hp('4%'),
    },
    taxDetailTxt: { 
      fontSize: 14, 
      color: '#535353', 
      fontWeight: 'bold',
    },
    serviceTxt: { 
      fontSize: 12, 
      color: '#535353',
    },
    serviceFeeTxt: { 
      fontSize: 12, 
      color: '#535353',
    },
    serviceView: { 
      marginTop: hp('1%'), 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    serviceTopView: { 
      marginTop: hp('4%'), 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    totalChargesView: { 
      marginHorizontal: wp('4%'), 
      marginTop: hp('4%'), 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    totalCharges: { 
      fontSize: 14, 
      color: '#535353', 
      fontWeight: 'bold',
    },
    paymentMethodView: { 
      marginHorizontal: wp('3%'), 
      marginTop: hp('4%'),
    },
    paymentMehtodTxt: { 
      fontSize: 14, 
      color: '#535353', 
      fontWeight:'700',
    },
    paymentImgView: { 
      marginTop: hp('3%'), 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    paymentImages: { 
      height: 20, 
      width: 50,
    },
    cardNumberTxt: { 
      fontSize: 12, 
      color: '#787878', 
      marginTop: hp('4%'),
    },
    cardNumberInput: { 
      flex: 1, 
      fontSize: 17, 
      backgroundColor: 'white', 
      color: '#535353', 
      marginHorizontal: wp('2%'),
    },
    cardInfoView: { 
      marginTop: hp('2%'), 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    cardInfoTxt: { 
      fontSize: 12, 
      color: '#787878', 
      marginTop: hp('1%'),
    },
    cvvTxt: { 
      fontSize: 12, 
      color: '#787878', 
      marginTop: hp('1%'), 
      marginRight: wp('15%'),
    },
    cardNumberInputView: { 
      marginTop: hp('1%'), 
      flexDirection: 'row', 
      justifyContent: 'space-around',
    },
    cardNumberPlaceHolder: { 
      flex: 1, 
      fontSize: 17, 
      backgroundColor: 'white', 
      color: '#535353', 
      marginHorizontal: wp('2%'),
    },
    questionIcon: { 
      marginTop: hp('2%'), 
      marginRight: wp('2%'),
    },
    checkOutBtnView: { 
      marginHorizontal: wp('3%'), 
      marginTop: hp('4%'), 
      elevation: 5,
    },
    checkoutTxt:  { 
      fontSize: 14, 
      color: '#FFFFFF', 
      fontWeight: 'bold',
    },
});
export default styles;