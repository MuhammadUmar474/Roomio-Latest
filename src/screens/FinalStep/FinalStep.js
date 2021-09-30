import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FinalStep = ({navigation, route}) => {

    console.log(route);
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath,
    data.Country, data.Street, data.State, data.City, data.ZipCode, data.Id, data.Id, data.Title, data.Price, data.Currency,
    data.Children, data.Infant, data.Pet, data.Smoking, data.Parties, data.UserNote, data.GuestBook, data.ArriveAfter, data.ArriveBefore, 
    data.LeaveBefore, data.MinStay, data.MaxStay);

    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Availability1')}>
                        <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>Now Let's Review Your Settings</Text>

                <View style={styles.requirementsContainer}>
                    <View>
                        <Text style={styles.smallHeadingsTxt}>Guest requirements</Text>
                        <Text style={styles.subHeadingsTxt}>Government-issue ID</Text>
                    </View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Location1')}
                    >
                        <Text style={styles.editTxt}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.requirementsContainer}>
                    <View>
                        <Text style={styles.smallHeadingsTxt}>House rules</Text>
                        <Text style={styles.subHeadingsTxt}>Not suitable for children (2-12)</Text>
                        <Text style={styles.subHeadingsTxt}>Not suitable for infant (under 2)</Text>
                        <Text style={styles.subHeadingsTxt}>No smoking</Text>
                        <Text style={styles.subHeadingsTxt}>No event or parties</Text>
                        <Text style={styles.subHeadingsTxt}>Suitable for pets</Text>
                    </View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Rules')}
                    >
                        <Text style={styles.editTxt}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.requirementsContainer}>
                    <View>
                        <Text style={styles.smallHeadingsTxt}>Availability</Text>
                        <Text style={styles.subHeadingsTxt}>Future reservations: blocked</Text>
                        <Text style={styles.subHeadingsTxt}>Check in/Check out: 2PM/4PM</Text>
                        <Text style={styles.subHeadingsTxt}>Min/Max stay:1 night/10 nights</Text>
                    </View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Availability')}
                    >
                        <Text style={styles.editTxt}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.requirementsContainer}>
                    <View>
                        <Text style={styles.smallHeadingsTxt}>Pricing</Text>
                        <Text style={styles.subHeadingsTxt}>$145 per night</Text>
                    </View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Name Listing')}
                    >
                        <Text style={styles.editTxt}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => navigation.navigate('Explore')}
                >
                  <Text style = {styles.nextTxt}>Publish</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default FinalStep;
