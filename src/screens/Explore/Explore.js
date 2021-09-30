import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SimplePlaces from '../../components/SimplePlaces/SimplePlaces';
import RoundButton from '../../components/RoundButton/RoundButton';
import styles from './Styles';

const Explore = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style = {styles.container}>
          <View>
            <SearchBar />
          </View>

          <View style = {styles.btnsView}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
              
                <RoundButton placeName="Entire Place"/>
                <RoundButton placeName="Private Room" onPress={() => navigation.navigate('Checkout')}/>
                <RoundButton placeName="Hotel Room"/>
                <RoundButton placeName="Best Room"/>
                <RoundButton placeName="Free Room"/>
              
            </ScrollView>
          </View>

          <View style = {styles.ratedSpacesView}>
            <Text style = {styles.featureHeader}>Top Rated Spaces</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: hp('2%')}}>
                <SimplePlaces />
                <SimplePlaces />
                <SimplePlaces />
                <SimplePlaces />

            </ScrollView>

          </View>

          <View style = {styles.exploreSpacesView}>
            <Text style = {styles.featureHeader}>Explore Spaces Around You</Text>
          <View style={styles.spacesCardView}>
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - DHA" />
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - JOHAR TOWN" />

          </View>

          <View style={styles.spacesCardView}>
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - DHA" />
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - JOHAR TOWN" />

          </View>

          <View style={styles.spacesCardView}>
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - DHA" />
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - JOHAR TOWN" />

          </View>

          </View>

      </SafeAreaView>
    </ScrollView>
  );
}

export default Explore;
