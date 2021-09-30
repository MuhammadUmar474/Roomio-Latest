import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInput } from 'react-native';

const Rules = ({navigation, route}) => {
    console.log(route);
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath,
    data.Country, data.Street, data.State, data.City, data.ZipCode, data.Id, data.Id, data.Title, data.Price, data.Currency);
    const [ childrens, setChildrens ] = useState('false');
    const [ infants, setInfants ] = useState('false');
    const [ pets, setPets ] = useState('false');
    const [ smoking, setSmoking ] = useState('false');
    const [ parties, setParties ] = useState('false');
    const [ userNote, setUserNote ] = useState('');

    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Amenities')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>WHAT ARE YOUR HOUSE RULES?</Text>

                <View style={styles.toggleView}>
                    <View>
                        <Text style={styles.rulesTxt}>Suitable for Childrens</Text>
                        <Text style={{color: '#414141', fontSize: 12}}>(2 - 12)</Text>
                    </View>
                    <View style={{marginRight: wp('5%')}}>
                    <Switch 
                    value = {childrens}
                    onValueChange = {(value) => setChildrens(value)}
                    trackColor={{ false: "#E9E9E9", true: "#EE2073" }}
                    thumbColor={"#FFFFFF"}/>
                    </View>
                    
                </View>

                <View style={styles.toggleView}>
                    <View>
                        <Text style={styles.rulesTxt}>Suitable for Infants</Text>
                        <Text style={{color: '#414141', fontSize: 12}}>(under 2)</Text>
                    </View>
                    <View style={{marginRight: wp('5%')}}>
                    <Switch 
                    value = {infants}
                    onValueChange = {(value) => setInfants(value)}
                    trackColor={{ false: "#E9E9E9", true: "#EE2073" }}
                    thumbColor={"#FFFFFF"}/>
                    </View>
                    
                </View>

                <View style={styles.toggleView}>
                    <View>
                        <Text style={styles.rulesTxt}>Suitable for pets</Text>
                    </View>
                    <View style={{marginRight: wp('5%')}}>
                    <Switch 
                    value = {pets}
                    onValueChange = {(value) => setPets(value)}
                    trackColor={{ false: "#E9E9E9", true: "#EE2073" }}
                    thumbColor={"#FFFFFF"}/>
                    </View>
                    
                </View>

                <View style={styles.toggleView}>
                    <View>
                        <Text style={styles.rulesTxt}>Smoking allowed</Text>
                    </View>
                    <View style={{marginRight: wp('5%')}}>
                    <Switch 
                    value = {smoking}
                    onValueChange = {(value) => setSmoking(value)}
                    trackColor={{ false: "#E9E9E9", true: "#EE2073" }}
                    thumbColor={"#FFFFFF"}/>
                    </View>
                    
                </View>

                <View style={styles.toggleView}>
                    <View>
                        <Text style={styles.rulesTxt}>Events or Parties Allowed</Text>
                    </View>
                    <View style={{marginRight: wp('5%')}}>
                    <Switch 
                    value = {parties}
                    onValueChange = {(value) => setParties(value)}
                    trackColor={{ false: "#E9E9E9", true: "#EE2073" }}
                    thumbColor={"#FFFFFF"}/>
                    </View>
                    
                </View>

                <Text style={styles.additionalRulesTxt}>Additional Rules</Text>
                <View style={styles.additionalNote}>
                    <TextInput
                    value = {userNote}
                    onChange = {setUserNote}
                    placeholder = "write additional rules here"/>
                </View>

                <View style = {{alignItems: 'flex-end', marginTop: hp('2%')}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => navigation.navigate('Availability', 
                {...data, Children: childrens, Infant: infants, Pet: pets, Smoking: smoking, Party: parties, UserNote: userNote})}
                >
                  <Text style = {styles.nextTxt}>Next</Text>
                </TouchableOpacity>
                </View>

            </View>

            
        </ScrollView>
    )
}

export default Rules;
