import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    width: wp('100%'),
    height: hp('28%'),
    backgroundColor: '#41BBB5',
  },
  buttonViewProfile: {
    width: wp('25%'),
    padding: 4,
    borderRadius: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    margin: wp('2%'),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
  },
  saveTxt: {
    fontSize: 14,
    marginTop: hp('3%'),
    fontWeight: 'bold',
    color: '#414141',
  },
  editProfileTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#414141',
    marginHorizontal: wp('5%'),
  },
  lastView: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
  },
  idTxt: {
    fontSize: 20,
    color: '#414141',
    marginTop: hp('3%'),
    fontWeight: 'bold',
  },
  govIdTxt: {
    fontSize: 20,
    color: '#414141',
    fontWeight: 'bold',
    marginLeft: wp('23%'),
    marginTop: hp('3%'),
  },
  addBtn: {
    padding: '2%',
    marginLeft: wp('3%'),
    marginTop: hp('3%'),
  },
  addTxt: {
    fontSize: 14,
    color: '#EE2073',
    fontWeight: 'bold',
  },
  picker: {
    width: width,
    elevation: 2,
    borderRadius: 40,
    backgroundColor: '#fff',
    marginTop: hp('3%'),
    marginHorizontal: wp('5%'),
  },
  datePick: {
    width: '100%',
  },
  errMsg: {
    paddingLeft: 30,
    color: 'red',
  },

  modalView: {
    backgroundColor: 'white',
  },
  imageBtnView: {
    marginTop: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonImg: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#EE2073',
    marginLeft: 20,
  },
  imagesTxt: {
    color: 'white',
    fontSize: 14,
    alignItems: 'center',
    marginTop: hp('1.4%'),
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  placeholderImg: {
    marginTop: hp('5%'),
    width: wp('100%'),
    height: wp('100%'),
    maxHeight: 240,
    resizeMode: 'contain',
  },
  govIdTxt: {
    fontSize: 20,
    color: '#414141',
    fontWeight: 'bold',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '700',
  },
});

export default styles;
