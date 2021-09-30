import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
const BathRoom = ({navigation, route}) => {
    const [sharedBath, setSharedBath] = useState(0);
    const [privateBath, setPrivateBath] = useState(0);

    const [sharedBathError, setSharedBathError] = useState({error: false, msg: ''});
    const [privateBathError, setPrivateBathError] = useState({error: false, msg: ''});
    console.log(route);
    let data = route.params;

    const Validation = () => {
        if (!sharedBath){
            setSharedBathError({error: true, msg: 'Please enter no of shared Bathroom !'});
            return;
        }
        if (!privateBath){
            setPrivateBathError({error: true, msg: 'Please enter no of private Bathroom !'});
        return;
        }
        navigation.navigate('Map', {...data,sharedBath: sharedBath, privateBath: privateBath})
        }
    return (
        <View style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator = {false} 
            style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Add Listing')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>How Many Bathrooms Are Available</Text>

                <View style = {styles.row}>
                    <View>
                        <Text style = {styles.rbbTxt}>Shared Bathrooms</Text>
                    </View>
                    <View style ={styles.btnView}>
                        <Pressable 
                        onPress ={() => setSharedBath(Math.max(0, sharedBath - 1))}
                        style = {styles.buttonNegative}
                        >
                            <Text style ={styles.btnTxt}>-</Text>
                        </Pressable>

                        <Text style ={styles.rbb1Txt}>{sharedBath}</Text>

                        <Pressable 
                        onPress ={() =>{
                            setSharedBath(sharedBath + 1)
                            setSharedBathError({error: false})
                        }
                        }
                        style = {styles.buttonPositive}
                        >
                            <Text style ={styles.plusTxt}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {sharedBathError.error && (
                    <Text style={styles.errMsg1}>{sharedBathError.msg}</Text>
                )}
                
                <View style = {styles.row}>
                    <View>
                        <Text style = {styles.rbbTxt}>Private Bathrooms</Text>
                    </View>
                    <View style ={styles.btnView}>
                        <Pressable 
                        onPress ={() => setPrivateBath(Math.max(0, privateBath - 1))}
                        style = {styles.buttonNegative}
                        >
                            <Text style ={styles.btnTxt}>-</Text>
                        </Pressable>

                        <Text style ={styles.rbb1Txt}>{privateBath}</Text>

                        <Pressable 
                        onPress ={() =>{
                            setPrivateBath(privateBath + 1)
                            setPrivateBathError({error: false})
                        }
                        }
                        style = {styles.buttonPositive}
                        >
                            <Text style ={styles.plusTxt}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {privateBathError.error && (
                    <Text style={styles.errMsg1}>{privateBathError.msg}</Text>
                )}

                <View style = {{alignItems: 'flex-end', marginTop: hp('40%')}}>
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

export default BathRoom;
