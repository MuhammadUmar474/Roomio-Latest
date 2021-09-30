import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Notification = ({navigation}) => {

    const [ isEmailEnabled, setEmail ] = useState('false');
    const [ isnotificationEnabled, setNotification ] = useState('false');
    return (
        <View style={styles.container}>
            <View style={{marginLeft: wp('4%')}}>
            <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Settings')}>
                <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
            </TouchableOpacity>

            <Text style={styles.notificationTxt}>Notification</Text>
            <Text style={styles.messagesTxt}>MESSAGES</Text>
            <Text style={styles.messageLineTxt}>Receive messages from host and guests, 
            including booking requests</Text>

            <View style={styles.toggleView}>
                <Text style={styles.emailTxt}>Email</Text>
                
                <View style={{marginRight: wp('5%')}}>
                <Switch 
                value = {isEmailEnabled}
                onValueChange = {(value) => setEmail(value)}
                trackColor={{ false: "#E9E9E9", true: "#EE2073" }}
                thumbColor={"#FFFFFF"}/>
                </View>
            </View>

            <View style={styles.toggleView}>
                <Text style={styles.emailTxt}>Push notifications</Text>
                
                <View style={{marginRight: wp('5%')}}>
                <Switch 
                value = {isnotificationEnabled}
                onValueChange = {(value) => setNotification(value)}
                trackColor={{ false: "#E9E9E9", true: "#EE2073" }}
                thumbColor={"#FFFFFF"}/>
                </View>
            </View>
            
            </View>
        </View>
    )
}

export default Notification;
