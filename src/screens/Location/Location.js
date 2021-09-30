import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FormInput from '../../components/FormInput/FormInput';

const Location = ({navigation, route}) => {
    console.log(route);
    let data = route.params;
    const [ country, setCountry ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ state, setState ] = useState('');
    const [ city, setCity ] = useState('');
    const [ zipCode, setZipCode ] = useState('');

    const [countryError, setCountryError] = useState({error: false, msg: ''});
    const [streetError, setStreetError] = useState({error: false, msg: ''});
    const [stateError, setStateError] = useState({error: false, msg: ''});
    const [cityError, setCityError] = useState({error: false, msg: ''});
    const [zipCodeError, setZipCodeError] = useState({error: false, msg: ''});

    const Validation = () => {
        if (!country){
            setCountryError({error: true, msg: 'Please enter your Country !'});
            return;
        }
        if (!street){
            setStreetError({error: true, msg: 'Please enter your Street !'});
        return;
        }
        if (!state){
            setStateError({error: true, msg: 'Please enter your State !'});
        return;
        }
        if (!city){
            setCityError({error: true, msg: 'Please enter your City !'});
        return;
        }
        if (!zipCode){
            setZipCodeError({error: true, msg: 'Please enter Zipcode !'});
        return;
        }
        navigation.navigate('Location1', {...data, Country: country, Street: street, State: state, City: city, ZipCode: zipCode})
        }

    return (
        <View style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator = {false} 
            style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Map')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>Where Is Your Place Located?  </Text>

                <View style={{marginTop: hp('4%')}}>
                    <Text style={styles.smallHeadingTxt}>Country/Region</Text>
                    <FormInput
                    placeholderText="eg Pakistan"
                    value = {country}
                    onchange = {(type) => {
                        setCountry(type)
                        setCountryError({error: false})
                    }}
                    stylesProps= {{marginHorizontal: '0%'}}
                        />
                </View>
                {countryError.error && (
                    <Text style={styles.errMsg}>{countryError.msg}</Text>
                )}

                <View style={{marginTop: hp('2%')}}>
                    <Text style={styles.smallHeadingTxt}>Street</Text>
                    <FormInput
                    placeholderText="eg Street 11"
                    value = {street}
                    onchange = {(type) => {
                        setStreet(type)
                        setStreetError({error: false})
                    }}
                    stylesProps= {{marginHorizontal: '0%'}} />
                </View>
                {streetError.error && (
                    <Text style={styles.errMsg}>{streetError.msg}</Text>
                )}
                <View style={{marginTop: hp('2%')}}>
                    <Text style={styles.smallHeadingTxt}>City</Text>
                    <FormInput
                    placeholderText="eg Lahore"
                    value = {city}
                    onchange = {(type) => {
                        setCity(type)
                        setCityError({error: false})
                    }}
                    stylesProps= {{marginHorizontal: '0%'}} />
                </View>
                {cityError.error && (
                    <Text style={styles.errMsg}>{cityError.msg}</Text>
                )}

                <View style={{marginTop: hp('2%')}}>
                    <Text style={styles.smallHeadingTxt}>State</Text>
                    <FormInput
                    placeholderText="eg Lahore"
                    value = {state}
                    onchange = {(type) => {
                        setState(type)
                        setStateError({error: false})
                    }}
                    stylesProps= {{marginHorizontal: '0%'}} />
                </View>
                {stateError.error && (
                    <Text style={styles.errMsg}>{stateError.msg}</Text>
                )}
                <View style={{marginTop: hp('2%')}}>
                    <Text style={styles.smallHeadingTxt}>Zip/Postal Code</Text>
                    <FormInput
                    placeholderText="eg 23200"
                    value = {zipCode}
                    onchange = {(type) => {
                        setZipCode(type)
                        setZipCodeError({error: false})
                    }}
                    keyboardType ={"numeric"}
                    stylesProps= {{marginHorizontal: '0%'}} />
                </View>
                {zipCodeError.error && (
                    <Text style={styles.errMsg}>{zipCodeError.msg}</Text>
                )}

                <View style = {{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => Validation()}
                >
                  <Text style = {styles.nextTxt}>Next</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Location;
