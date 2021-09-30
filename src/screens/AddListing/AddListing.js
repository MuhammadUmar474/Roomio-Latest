import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Pressable, ToastAndroid, Platform, AlertIOS } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';

const HostScreen = ({navigation}) => {

    const [propertyType, setPropertyType] = useState('');
    const [guest, setGuest] = useState(0);
    const [Bed, setBeds] = useState(0);
    const [Bedroom, setBedrooms] = useState(0);

    const [propertyTypeError, setPropertyTypeError] = useState({error: false, msg: ''});
    const [guestError, setGuestError] = useState({error: false, msg: ''});
    const [bedError, setBedError] = useState({error: false, msg: ''});
    const [bedroomError, setBedRoomError] = useState({error: false, msg: ''});

    const data = [
        {
          label: 'entire place',
          value:"entire place"
        },
        {
            label: 'Shared Room',
            value:"shared room"
        },
        {
            label: 'Single Portion',
            value:"single portion"
        }
    ];
        
    const Validation = () => {
        if (!propertyType){
            setPropertyTypeError({error: true, msg: 'Please Select Property Type !'});
            return;
        }
        if (!guest){
            setGuestError({error: true, msg: 'Please enter no of Guest !'});
        return;
        }
        if (!Bed){
            setBedError({error: true, msg: 'Please enter no of Beds !'});
        return;
        }
        if (!Bedroom){
            setBedRoomError({error: true, msg: 'Please enter no of BedRooms !'});
        return;
        }
        navigation.navigate('Bathroom', {property_type: propertyType, guest: guest ,bed: Bed, bedroom: Bedroom })
        }
    return (
        <View style={styles.container}>
            <ScrollView 
            showsVerticalScrollIndicator = {false}
            style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Settings')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>

                <Text style={styles.listPlaceTxt}>List Your Place</Text>
                <Text style={styles.listPlaceTxt}>What Are You Offering?</Text>

                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <View style={styles.mainOfferView}>
                            <View style={styles.offerView}>
                                <Text style={styles.smallHeadingTxt}>Entire Place</Text>
                            </View>
                            <Text style={styles.guestLineTxt}>guest have the whole place to themselves, {"\n"}
                            this usually includes bedroom, bathroom and kitchen</Text>
                        </View>

                        <View style={styles.mainOfferView}>
                            <View style={styles.offerView}>
                                <Text style={styles.smallHeadingTxt}>Shared Room</Text>
                                <View style={styles.radioBtn}>
                                
                                </View>
                            </View>
                            <Text style={styles.guestLineTxt}>guest have the whole place to themselves, {"\n"}
                            this usually includes bedroom, bathroom and kitchen</Text>
                        </View>

                        <View style={styles.mainOfferView}>
                            <View style={styles.offerView}>
                                <Text style={styles.smallHeadingTxt}>Portion</Text>
                                <View style={styles.radioBtn}>
                                
                                </View>
                            </View>
                            <Text style={styles.guestLineTxt}>guest have the whole place to themselves, {"\n"}
                            this usually includes bedroom, bathroom and kitchen</Text>
                        </View>
                     </View>   

                    <View style={{width:40}}>
                        <View style={styles.radioBtn}>
                            <RadioButtonRN
                            data={data}
                            textStyle={{display:"none"}}
                            box={false}
                            boxStyle={{marginBottom:30,width:40}}
                            activeColor = {'#EE2073'}
                            deactiveColor={'#999'}
                            selectedBtn={(e) => setPropertyType(e.value)}
                            />
                        </View>
                    </View>
                </View>
                {propertyTypeError.error && (
                    <Text style={styles.errMsg}>{propertyTypeError.msg}</Text>
                )}

                <View style={styles.guestView}>
                    <Text style={styles.listPlaceTxt}>How Many Guests can Accomodate?</Text>
                    <View style={{ marginTop: hp('1%') }}>
                    <View style = {styles.row}>
                        <View>
                            <Text style = {styles.rbbTxt}>No of Guests</Text>
                        </View>
                        <View style ={styles.btnView}>
                            <Pressable 
                            onPress ={() => setGuest(Math.max(0, guest - 1))}
                            style = {styles.buttonNegative}
                            >
                                <Text style ={styles.btnTxt}>-</Text>
                            </Pressable>

                            <Text style ={styles.rbb1Txt}>{guest}</Text>

                            <Pressable 
                            onPress ={() => {
                                setGuest(guest + 1)
                                setGuestError({error: false})
                            }}
                            style = {styles.buttonPositive}
                            >
                                <Text style ={styles.plusTxt}>+</Text>
                            </Pressable>
                        </View>
                    </View>
                    {guestError.error && (
                    <Text style={styles.errMsg1}>{guestError.msg}</Text>
                    )}

                    <View style = {styles.row}>
                        <View>
                            <Text style = {styles.rbbTxt}>No of Beds</Text>
                        </View>
                        <View style ={styles.btnView}>
                            <Pressable 
                            onPress ={() => setBeds(Math.max(0, Bed - 1))}
                            style = {styles.buttonNegative}
                            >
                                <Text style ={styles.btnTxt}>-</Text>
                            </Pressable>

                            <Text style ={styles.rbb1Txt}>{Bed}</Text>

                            <Pressable 
                            onPress ={() => {
                                setBeds(Bed + 1)
                                setBedError({error: false})
                            }}
                            style = {styles.buttonPositive}
                            >
                                <Text style ={styles.plusTxt}>+</Text>
                            </Pressable>
                        </View>
                    </View>
                    {bedError.error && (
                    <Text style={styles.errMsg1}>{bedError.msg}</Text>
                    )}

                    <View style = {styles.row}>
                        <View>
                            <Text style = {styles.rbbTxt}>No of Bedrooms</Text>
                        </View>
                        <View style ={styles.btnView}>
                            <Pressable 
                            onPress ={() => setBedrooms(Math.max(0, Bedroom - 1))}
                            style = {styles.buttonNegative}
                            >
                                <Text style ={styles.btnTxt}>-</Text>
                            </Pressable>

                            <Text style ={styles.rbb1Txt}>{Bedroom}</Text>

                            <Pressable 
                            onPress ={() => {
                                setBedrooms(Bedroom + 1)
                                setBedRoomError({error: false})
                            }}
                            style = {styles.buttonPositive}
                            >
                                <Text style ={styles.plusTxt}>+</Text>
                            </Pressable>
                        </View>
                    </View>
                    {bedroomError.error && (
                    <Text style={styles.errMsg1}>{bedroomError.msg}</Text>
                    )}
                    </View>
                </View>

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

export default HostScreen
