import React, { useState, Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import { SliderBox } from 'react-native-image-slider-box';
import styles from './Styles';
class Places extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
      ]
    };
  }
  render(){
  return (
    <View style={styles.container}>
          <View style={styles.sliderView}>
            <SliderBox 
              style={styles.sliderBox} 
              images={this.state.images}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
            />
          </View>
               <View style={{flex: 1, padding: 8}}>
                <Text style={styles.cityTxt}>ISLAMABAD</Text>

                <View style ={styles.starRatingView}>
                  <StarRating
                      fullStarColor={'#41BBB5'}
                      emptyStarColor={'#41BBB5'}
                      disabled={false}
                      maxStars={1}
                      starSize={9}
                      // rating={defaultRating}
                      // selectedStar={(rating) => handleChange(rating)}
                  />
                  <Text style = {{marginTop: -3, fontSize: 9}}> 4.8 (60)</Text>
                </View>
                <Text style={styles.descriptionTxt}>Classical Apartment on the Royal Mile</Text>
                <Text style={styles.totalPrieTxt}>Rs 10000/night</Text>
               </View>
          </View>
  );
}
}

export default Places;
