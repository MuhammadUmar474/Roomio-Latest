import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NameListing = ({navigation, route}) => {
    console.log(route);
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath,
    data.Country, data.Street, data.State, data.City, data.ZipCode, data.Id);
    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ currency, setCurrency ] = useState('');

    const [titleError, setTitleError] = useState({error: false, msg: ''});
    const [priceError, setPriceError] = useState({error: false, msg: ''});
    const [currencyError, setCurrencyError] = useState({error: false, msg: ''});

    const Validation = () => {
        if (!title){
            setTitleError({error: true, msg: 'Please enter Title !'});
            return;
        }
        if (!price){
            setPriceError({error: true, msg: 'Please enter Price !'});
        return;
        }
        if (!currency){
            setCurrencyError({error: true, msg: 'Please enter Currency !'});
        return;
        }
        navigation.navigate('Add Images', {...data, Title: title, Price: price, Currency: currency})
        }
    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
            <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Location1')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>Name Your Listing  </Text>
                <Text style={styles.belowHeadingTxt}>Attract guests by giving your listing a brief & catchy title</Text>

                <View style={{marginTop: hp('3%')}}>
                    <FormInput
                    placeholderText="add title"
                    value = {title}
                    onchange = {(type) => {
                        setTitle(type)
                        setTitleError({error: false})
                    }}
                    stylesProps= {{marginHorizontal: '0%'}}
                        />
                </View>
                {titleError.error && (
                    <Text style={styles.errMsg}>{titleError.msg}</Text>
                )}

                <Text style={styles.headingTxt}>Price Your Space</Text>

                <View style={{marginTop: hp('4%')}}>
                    <Text style={styles.smallHeadingTxt}>Price per night</Text>
                    <FormInput
                    placeholderText="Rs 5000"
                    value = {price}
                    onchange = {(type) => {
                        setPrice(type)
                        setPriceError({error: false})
                    }}
                    keyboardType ={"numeric"}
                    stylesProps= {{marginHorizontal: '0%', marginTop: '1%'}}
                        />
                </View>
                {priceError.error && (
                    <Text style={styles.errMsg}>{priceError.msg}</Text>
                )}

                <View style={{marginTop: hp('4%')}}>
                    <Text style={styles.smallHeadingTxt}>Currency</Text>
                    <FormInput
                    placeholderText="Pakistani Rupees"
                    value = {currency}
                    onchange = {(type) => {
                        setCurrency(type)
                        setCurrencyError({error: false})
                    }}
                    stylesProps= {{marginHorizontal: '0%', marginTop: '1%'}}
                        />
                </View>
                {currencyError.error && (
                    <Text style={styles.errMsg}>{currencyError.msg}</Text>
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

export default NameListing;
