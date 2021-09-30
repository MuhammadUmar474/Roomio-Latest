import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MapScreen = ({navigation, route}) => {
    console.log(route);
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath);
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
            <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Bathroom')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
            </TouchableOpacity>
            <Text style={styles.headingTxt}>Please Enter Your Location</Text>

            <View>
            <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            query={{
                key: 'AIzaSyDEIYSnYoApn6S6fvFlTxCKuwrb3FoguU8',
                language: 'en',
            }}
            />
            </View>

            <TouchableOpacity style={{marginTop: hp('7%')}} onPress={() => navigation.navigate('Location', {...data})}>
                <Text style={styles.manualLocationTxt}>Enter Manual Location </Text>
            </TouchableOpacity>
            </View>

            <View style = {{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => navigation.navigate('Location1', {...data})}
                >
                  <Text style = {styles.nextTxt}>Next</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}

export default MapScreen;
