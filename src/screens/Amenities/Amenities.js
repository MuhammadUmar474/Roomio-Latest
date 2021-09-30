import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import SelectableChips from 'react-native-chip/SelectableChips'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AmenitiesButton from '../../components/AmenitiesButton/AmenitiesButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Amenities = ({navigation, route}) => {
    console.log(route);
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath,
    data.Country, data.Street, data.State, data.City, data.ZipCode, data.Id, data.Id, data.Title, data.Price, data.Currency);
    return (
        <View style={styles.container}>
            <View style = {{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Add Images')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>WHAT AMENITIES WILL YOU PROVIDE?</Text>

                <View style={styles.amenityView}>
                    <SelectableChips 
                    initialChips={["Air Conditioning", "Tv","Parking","Heating", "Washing", "Iron", "Shampoo", "BreakFast", "Hangers", "Wifi", "Hot Water", "Essentials"]} 
                    onChangeChips={(chips) => console.log(chips)} 
                    alertRequired={false}
                    valueStyle={{color: '#ABABAB', fontSize:14, }}
                    chipStyle={{borderColor: '#ABABAB'}}
                    valueStyleSelected={{color: '#fff',fontSize:14}}
                    chipStyleSelected={{backgroundColor: '#EE2073', borderColor: '#EE2073'}}
                    />
                    
                </View>

                <View style = {{alignItems: 'flex-end', marginTop: hp('5%')}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => navigation.navigate('Rules', 
                {...data})}
                >
                  <Text style = {styles.nextTxt}>Next</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Amenities;
