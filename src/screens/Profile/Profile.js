import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ViewMoreText from 'react-native-view-more-text';
import SimplePlaces from '../../components/SimplePlaces/SimplePlaces';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TopTabs from '../../components/TopTabs';
import styles from './Styles';

const Profile = ({navigation}) => {

    const [defaultRating, setDefaultRating] = useState(4);

    renderViewMore =(onPress) =>{
        return(
          <Text style={styles.readLessMoreTxt} onPress={onPress}>Read more</Text>
        )
      };
    
    renderViewLess = (onPress) =>{
      return(
        <Text style={styles.readLessMoreTxt} onPress={onPress}>Read less</Text>
      )
    };

    return (
        <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}>
            <View style={styles.headerView}>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Settings')}>
                    <FontAwesome name={"long-arrow-left"} size={20} color={"white"}/>
                </TouchableOpacity>

                <Text style={styles.profileTxt}>Profile</Text>
                </View>

                <View style={{ marginLeft: wp('4%')}}>
                    <View style={styles.profileImageView}>
                        <Image source={require('../../assets/images/chinies.jpg')} style={styles.profileImage}/>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.userNameTxt}>Hi I'm Hamza Sattar</Text>
                        <Text style={styles.joinDateTxt}>joined on 12 june 2019</Text>
                    </View>

                    <View style={styles.iconsView}>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name = {"shield-checkmark"} size = {15} color = {"#41BBB5"} style={{marginTop: hp('0.3%')}} />
                            <Text style={styles.verifiedTxt}> Verified</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginLeft: wp('10%')}}>
                            <FontAwesome name = {"comment-o"} size = {15} style={{marginTop: hp('0.3%')}} />
                            <Text style={styles.verifiedTxt}> 124 reviews</Text>
                        </View>
                    </View>
                </View>
            </View>

            <Text style={styles.aboutTxt}>ABOUT</Text>

            <View style={{marginTop: hp('1%'), marginLeft: wp('4%')}}>
                <ViewMoreText
                numberOfLines={3}
                renderViewMore={ renderViewMore }
                renderViewLess={ renderViewLess }
                >
                <Text style={styles.paragraphTxt}>
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

            <Text style={styles.shortHeadingTxt}>VERIFICATION</Text>

            <View style={{ marginLeft: wp('4%')}}>
                <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name = {"checkmark-circle-outline"} size = {15} style={{marginTop: hp('0.3%')}} />
                        <Text style={{fontSize: 14, color: '#414141', marginLeft: wp('1%')}}> Email Address</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginLeft: wp('10%')}}>
                        <Ionicons name = {"checkmark-circle-outline"} size = {15} style={{marginTop: hp('0.3%')}} />
                        <Text style={{fontSize: 14, color: '#414141', marginLeft: wp('1%')}}> Government ID</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: hp('1%')}}>
                        <Ionicons name = {"checkmark-circle-outline"} size = {15} style={{marginTop: hp('0.3%')}} />
                        <Text style={styles.phoneNumberTxt}> Phone Number</Text>
                    </View>
            </View>

            <View style = {{ backgroundColor: 'transparent'}}>
            <Text style={styles.shortHeadingTxt}>LISTINGS BY HAMZA</Text>
            <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            nestedScrollEnabled={true} 
            style={{marginTop: hp('2%'), marginLeft: wp('1%')}}>
              <SimplePlaces />
              <SimplePlaces />
              <SimplePlaces />
              <SimplePlaces />

            </ScrollView>

          </View>

          <View style={styles.reviewsContainer}>
            <View style={styles.reviewsTxtView}>
              <Text style={{fontSize: 14, color: '#000000', fontWeight: 'bold', }}>REVIEWS</Text>
            </View>

            <TopTabs />

          </View>
            
        </ScrollView>
    )
}

export default Profile;
