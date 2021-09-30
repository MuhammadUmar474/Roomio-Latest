import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Location1 = ({navigation, route}) => {
    console.log(route);
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath,
    data.Country, data.Street, data.State, data.City, data.ZipCode);
    const [ id, setId ] = useState('false');
    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Map')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>Review Roomio's Guests Requirements  </Text>
                <Text style={styles.belowHeadingTxt}>Guests must agree to these requirements before booking</Text>
                
                <View style={{marginTop: hp('3%')}}>

                    <View style= {styles.confirmView}>
                    <Ionicons name= "checkmark-outline" color={"#41BBB5"} size={20}/>
                    <Text style={styles.checkstxt}>Confirmed Email Address</Text>
                    </View>

                    <View style= {styles.confirmView}>
                    <Ionicons name= "checkmark-outline" color={"#41BBB5"} size={20}/>
                    <Text style={styles.checkstxt}>Confirmed Phone Number</Text>
                    </View>

                    <View style= {styles.confirmView}>
                    <Ionicons name= "checkmark-outline" color={"#41BBB5"} size={20}/>
                    <Text style={styles.checkstxt}>Payment Information</Text>
                    </View>

                    <View style= {styles.confirmView}>
                    <Ionicons name= "checkmark-outline" color={"#41BBB5"} size={20}/>
                    <Text style={styles.checkstxt}>Agree to your house rules</Text>
                    </View>

                    <Text style={styles.additionalTxt}>Additional requirements (optional)</Text>

                    <View style={styles.toggleView}>
                        <Text style={styles.idTxt}>Government-issued ID</Text>
                        
                        <View style={{marginRight: wp('5%')}}>
                        <Switch 
                        value = {id}
                        onValueChange = {(value) => setId(value)}
                        trackColor={{ false: "#767577", true: "#EE2073" }}
                        thumbColor={"#FFFFFF"}/>
                        </View>
                    </View>
                </View>

                <View style = {{alignItems: 'flex-end', marginTop: hp('15%')}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => navigation.navigate('Name Listing', 
                {...data, Id:id})}
                >
                  <Text style = {styles.nextTxt}>Next</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Location1;
