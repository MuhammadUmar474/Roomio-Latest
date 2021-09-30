import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  featureHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: wp('4%'),
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
    flexDirection: 'row',
  },
});

  export default styles;