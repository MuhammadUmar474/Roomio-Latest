import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import PlaceDetailScreen from './PlaceDetailScreen';
// import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import styles from './Styles';

const BookingCard = (props) => {

  const [defaultRating, setDefaultRating] = useState(4)
 
  const handleChange = (value) => {
    setDefaultRating(value);
  }
  return (
    <View style={styles.container}>
            <View style={{flex: 2}}>
              <Image source={require('../../assets/images/placeholder.png')}
               style={{flex:1, height: null, width: null, resizeMode: 'cover'}} />
            </View>
               <View style = {{marginTop: hp('1%')}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.cityName}>Islamabad</Text>
                  <View style ={styles.starContainer}>
                  <StarRating
                      fullStarColor={'#41BBB5'}
                      disabled={false}
                      maxStars={5}
                      starSize={10}
                      rating={defaultRating}
                      selectedStar={(rating) => handleChange(rating)}
                  />
                  <Text style = {{marginTop: -6}}> (4.8)</Text>
                  </View>
                </View>
                <Text style={styles.description}>Classical Apartment on the Royal Mile</Text>
                <Text style={styles.addresstxt}>Johar Town h3 Block, Lahore</Text>
                <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.price}>Rs 10000/night</Text>
                <TouchableOpacity style={styles.cancelBtn}
                  onPress={props.onPress}>
                  <Text style = {styles.cancelTxt}>cancel</Text>
                </TouchableOpacity>
                </View>
               </View>
          </View>
  );
}

export default BookingCard;