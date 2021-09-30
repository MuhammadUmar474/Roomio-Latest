import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  backBtn: { 
    marginTop: hp('5%'),
    marginHorizontal: wp('5%'),
  },
  headingTxt: {
    fontSize: 25,
    color: '#414141',
    marginTop: hp('4%'),
    fontWeight: 'bold',
    marginHorizontal: wp('5%'),
  },
  featureHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: wp('4%'),
  },
  exploreSpacesTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: wp('4%'),
    marginTop: hp('2%'),
  },
  container: { 
    flex: 1, 
    backgroundColor: 'white',
  },
  btnsView: { 
    marginTop: hp('4%'), 
    marginLeft: wp('3%'), 
    flexDirection: 'row',
  },
  ratedSpacesView: { 
    backgroundColor: 'transparent', 
    marginLeft: wp('1%'), 
    marginTop: hp('4%'),
  },
  exploreSpacesView: { 
    backgroundColor: 'transparent', 
    marginLeft: wp('1%'),
  },
  spacesCardView: { 
    marginTop: hp('2%'),
    marginLeft: wp('1%'),
    flexDirection: 'row',
  },
});

export default styles;