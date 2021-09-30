import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// `import SearchBar from '../../components/SearchBar/SearchBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import FPlaces from '../../components/FPlaces/FPlaces';
// import SimplePlaces from '../../components/SimplePlaces/SimplePlaces';
// import RoundButton from '../../components/RoundButton/RoundButton';
import styles from './Styles';
import Favouritecard from '../../components/Favouritecard/Favouritecard';

const Favourite = ({navigation}) => {
  return (
    <ScrollView style = {styles.container}
    showsVerticalScrollIndicator={false}>
      <SafeAreaView>

      <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Explore')}>
        <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
      </TouchableOpacity>
      <Text style={styles.headingTxt}>My Favourite</Text>
        <Favouritecard />
        <Favouritecard />
        <Favouritecard />
        <Favouritecard />
          {/* <View>
            <SearchBar />
          </View>

          <View style = {styles.btnsView}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
              
                <RoundButton placeName="Entire Place"/>
                <RoundButton placeName="Private Room"/>
                <RoundButton placeName="Hotel Room"/>
                <RoundButton placeName="Best Room"/>
                <RoundButton placeName="Free Room"/>
              
            </ScrollView>
          </View>

          <View style = {{marginTop: hp('5%')}}>
            <Text style ={styles.featureHeader}>Featured Spaces</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Place Details')}>
            <FPlaces />
            </TouchableOpacity>
          </View>

          <View style = {{ backgroundColor: 'transparent'}}>
            <Text style = {styles.featureHeader}>Top Rated Spaces</Text>
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

          <View style = {{ backgroundColor: 'transparent'}}>
            <Text style = {styles.exploreSpacesTxt}>Explore Spaces Around You</Text>
          <View style={styles.spacesCardView}>
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - DHA" />
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - JOHAR TOWN" />

            </View>
          </View> */}
      </SafeAreaView>
    </ScrollView>
    );
}
export default Favourite;
