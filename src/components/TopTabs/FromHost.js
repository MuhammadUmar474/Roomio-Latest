import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ViewMoreText from 'react-native-view-more-text';
import StarRating from 'react-native-star-rating';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FromHost = () => {

    const [defaultRating, setDefaultRating] = useState(4)
 
    const handleChange = (value) => {
        setDefaultRating(value);
    }

    renderViewMore =(onPress) =>{
        return(
          <Text style={{fontSize: 12, color: '#41BBB5'}} onPress={onPress}>Read more</Text>
        )
      };
    
      renderViewLess = (onPress) =>{
        return(
          <Text style={{fontSize: 12, color: '#41BBB5'}} onPress={onPress}>Read less</Text>
        )
      };

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flexDirection: 'row', marginTop: hp('3%')}}>

            <View>
            <Image source={require('../../assets/images/chinies.jpg')} style={{borderRadius: 30, height: 60, width: 60}}/>
            </View>
            <View style={{marginLeft: wp('4%'), marginTop: hp('2%')}}>
            <Text style={{fontSize: 12, color: '#535353', fontWeight: 'bold'}}>John Doe</Text>
            <Text style={{fontSize: 10, color: '#535353'}}>27 Nov</Text>
            </View>
            
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

            <View style={{marginTop: hp('1%'), marginLeft: wp('1%')}}>
                <ViewMoreText
                numberOfLines={3}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                >
                <Text style={{marginTop: hp('1%'), fontSize: 12, color: '#414141', padding: 10}}>
                It is a long established 
                fact that a reader will be
                distracted by the readable
                content of a page when 
                looking at its layout. 
                The point of using Lorem Ipsum 
                is that it has a more-or-less normal 
                distribution of letters, as opposed to using 
                'Content here, content here', making it look like 
                readable English. Many desktop publishing packages and web page 
                editors now use Lorem Ipsum as their default model text, and a search for 
                'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Text>
                </ViewMoreText>
            </View>
                <TouchableOpacity
                style={{flexDirection: 'row', marginTop: hp('1%'), justifyContent: 'flex-end', marginRight: wp('4%')}}>
                    <Text style={{color: '#41BBB5'}}>View all 45 Reviews</Text>
                    <FontAwesome name="long-arrow-right" size={20} color={"#41BBB5"} style={{ marginLeft: wp('2%') }}/>
                </TouchableOpacity>
          </View>
    )
}

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
        flexDirection: 'row',
        marginTop: hp('3%'),  
        marginLeft: wp('4%'),
    },
    starContainer: {
        flexDirection: 'row', 
        marginTop: 7, 
        marginLeft: wp('30%'),
        marginTop: hp('4%'),
        color: '#41BBB5'
      },
  });

export default FromHost;
