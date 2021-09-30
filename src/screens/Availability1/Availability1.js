import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatepickerRange from 'react-native-range-datepicker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Availability1 = ({navigation, route}) => {

    console.log(route);
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath,
    data.Country, data.Street, data.State, data.City, data.ZipCode, data.Id, data.Id, data.Title, data.Price, data.Currency,
    data.Children, data.Infant, data.Pet, data.Smoking, data.Parties, data.UserNote, data.GuestBook, data.ArriveAfter, data.ArriveBefore, 
    data.LeaveBefore, data.MinStay, data.MaxStay);

    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Availability')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>SELECT YOUR AVAILABILITY</Text>
                <Text style={styles.underHeadingTxt}>Select to block or unblock</Text>
                
                <View style={{height: hp('50%')}}>
                <DatepickerRange
                    startDate = '13052017'
                    untilDate = '26062017'
                    onConfirm = {( startDate, untilDate ) => this.setState({ startDate, untilDate })}
                />
                </View>
                
                <View style = {{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => navigation.navigate('Final Step', 
                {...data})}
                >
                  <Text style = {styles.nextTxt}>Next</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Availability1
