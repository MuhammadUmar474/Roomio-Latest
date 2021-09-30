import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Availability = ({navigation, route}) => {

    console.log(route);
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath,
    data.Country, data.Street, data.State, data.City, data.ZipCode, data.Id, data.Id, data.Title, data.Price, data.Currency,
    data.Children, data.Infant, data.Pet, data.Smoking, data.Parties, data.UserNote);
    const [ guestBook, setGuestBook ] = useState('');
    const [ arriveAfter, setArriveAfter ] = useState('');
    const [ arriveBefore, setArriveBefore ] = useState('');
    const [ leaveBefore, setLeaveBefore ] = useState('');
    const [ minStay, setMinStay ] = useState('');
    const [ maxStay, setMaxStay ] = useState('');

    const [guestBookError, setGuestBookError] = useState({error: false, msg: ''});
    const [arriveAfterError, setArriveAfterError] = useState({error: false, msg: ''});
    const [arriveBeforeError, setArriveBeforeError] = useState({error: false, msg: ''});
    const [leaveBeforeError, setLeaveBeforeError] = useState({error: false, msg: ''});
    const [minStayError, setMinStayError] = useState({error: false, msg: ''});
    const [maxStayError, setMaxStayError] = useState({error: false, msg: ''});


    const Validation = () => {
        if (!guestBook){
            setGuestBookError({error: true, msg: 'Please enter advance booking info !'});
            return;
        }
        if (!arriveAfter){
            setArriveAfterError({error: true, msg: 'Please enter arrive after time !'});
        return;
        }
        if (!arriveBefore){
            setArriveBeforeError({error: true, msg: 'Please enter arrive before time !'});
        return;
        }
        if (!leaveBefore){
            setLeaveBeforeError({error: true, msg: 'Please enter leave before time !'});
        return;
        }
        if (!minStay){
            setMinStayError({error: true, msg: 'Please enter min time !'});
        return;
        }
        if (!maxStay){
            setMaxStayError({error: true, msg: 'Please enter max time !'});
        return;
        }
        navigation.navigate('Availability1', 
                {...data, GuestBook: guestBook, ArriveAfter: arriveAfter, ArriveBefore: arriveBefore, LeaveBefore: leaveBefore, MinStay: minStay, MaxStay: maxStay})
        }
    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Rules')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>AVAILABILITY</Text>

                <Text style={styles.advanceBookingTxt}>Advance Booking </Text>
                <Text style={styles.guestBookTxt}>how far into the future can guest book? </Text>

                <FormInput 
                placeholderText = "3 months in advance"
                value={guestBook}
                onchange = {(type) => {
                    setGuestBook(type)
                    setGuestBookError({error: false})
                }}
                style={{top:-15}}/>
                {guestBookError.error && (
                    <Text style={styles.errMsg}>{guestBookError.msg}</Text>
                )}

                <Text style={styles.headingTxt}>CHECK IN & CHECK OUT</Text>

                <Text style={styles.advanceBookingTxt}>Arrive After </Text>
                <FormInput 
                placeholderText = "4 PM"
                value={arriveAfter}
                onchange = {(type) => {
                    setArriveAfter(type)
                    setArriveAfterError({error: false})
                }}
                style={{top:-15}}/>
                {arriveAfterError.error && (
                    <Text style={styles.errMsg}>{arriveAfterError.msg}</Text>
                )}

                <Text style={styles.advanceBookingTxt}>Arrive Before </Text>
                <FormInput 
                placeholderText = "7 PM"
                value={arriveBefore}
                onchange = {(type) => {
                    setArriveBefore(type)
                    setArriveBeforeError({error: false})
                }}
                style={{top:-15}}/>
                {arriveBeforeError.error && (
                    <Text style={styles.errMsg}>{arriveBeforeError.msg}</Text>
                )}

                <Text style={styles.advanceBookingTxt}>Leave Before </Text>
                <FormInput 
                placeholderText = "10 AM"
                value={leaveBefore}
                onchange = {(type) => {
                    setLeaveBefore(type)
                    setLeaveBeforeError({error: false})
                }}
                style={{top:-15}}/>
                {leaveBeforeError.error && (
                    <Text style={styles.errMsg}>{leaveBeforeError.msg}</Text>
                )}

                <Text style={styles.headingTxt}>TRIP LENGTH</Text>

                <Text style={styles.advanceBookingTxt}>Minimum stay (night) </Text>
                <FormInput 
                placeholderText = "1"
                value={minStay}
                onchange = {(type) => {
                    setMinStay(type)
                    setMinStayError({error: false})
                }}
                keyboardType ={"numeric"}
                style={{top:-15}}/>
                {minStayError.error && (
                    <Text style={styles.errMsg}>{minStayError.msg}</Text>
                )}

                <Text style={styles.advanceBookingTxt}>Maximum stay (night) </Text>
                <FormInput 
                placeholderText = "10"
                value={maxStay}
                onchange = {(type) => {
                    setMaxStay(type)
                    setMaxStayError({error: false})
                }}
                keyboardType ={"numeric"}
                style={{top:-15}}/>
                {maxStayError.error && (
                    <Text style={styles.errMsg}>{maxStayError.msg}</Text>
                )}

                <View style = {{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => Validation()}
                >
                  <Text style = {styles.nextTxt}>Next</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Availability;
