import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, Modal, Pressable } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import styles from './Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Checkout = ({navigation}) => {

    const [Adult, setAdult] = useState(0);
    const [Children, setChildren] = useState(0);
    const [Infant, setInfant] = useState(0);

    const [defaultRating, setDefaultRating] = useState(3); 
    const [modalVisible, setModalVisible] = useState(false);

    const handleChange = (value) => {
        setDefaultRating(value);
      } 

    return (
        <View style={styles.mainView}>
            
            <View style={styles.backButtonView}>
                <TouchableOpacity
                style={styles.backButton}
                    onPress={() => navigation.navigate('Explore')} 
                >
                    <FontAwesome name={"long-arrow-left"} size={25} />
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <TouchableOpacity style={styles.modelCloseButton}
                         onPress={() => setModalVisible(false)}>
                            <FontAwesome name="times" size={15}/>
                        </TouchableOpacity>
                    </View>
            <View style={{marginTop: hp('1%')}}>
              <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>Adult</Text>

                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setAdult(Math.max(0, Adult - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>
                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Adult}</Text>
                    <Pressable 
                    onPress ={() => setAdult(Adult + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>Children</Text>
                    <Text style = {{fontSize: 10, color: '#414141'}}>Under Age of 12</Text>
                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setChildren(Math.max(0, Children - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>
                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Children}</Text>
                    <Pressable 
                    onPress ={() => setChildren(Children + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>Infant</Text>
                    <Text style = {{fontSize: 10, color: '#414141'}}>Under Age of 2</Text>
                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setInfant(Math.max(0, Infant - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>
                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Infant}</Text>
                    <Pressable 
                    onPress ={() => setInfant(Infant + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
                </View>
            </View> 

            <View style={styles.cancelButtonView}>
                <TouchableOpacity>
                  <Text style={styles.cancelTxt}> Cancel </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSave}
                //  onPress={() => navigation.navigate('Imageslider')}
                >
                  <Text style = {styles.applyFilterTxt}>Apply Filter</Text>
                </TouchableOpacity>
              </View>
                </View>
                </View>
            </Modal>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cardView}>
                <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/chinies.jpg')} style={styles.cardImg}/>
                <View style={{marginLeft: wp('1%'), flexShrink: 1}}>
                    <Text style={styles.privateRoomTxt}>Private Room</Text>
                    <Text style={styles.descriptionLineTxt}>Classical Appartment on the Royal Mine</Text>
                    <View style ={styles.starRatingView}>
                  <StarRating
                      fullStarColor={'#41BBB5'}
                      emptyStarColor={'#41BBB5'}
                      disabled={false}
                      maxStars={1}
                      starSize={9}
                      rating={defaultRating}
                      selectedStar={(rating) => handleChange(rating)}
                  />
                  <Text style = {{marginTop: -2, fontSize: 9}}> 4.8 (60)</Text>
                  <Text style={styles.chargesTxt}>12000/Night</Text>
                </View>

                </View>

                </View>

            </View>

            <View style={styles.bottomLine}/>

            <View style={styles.checkIncheckOutView}>
                <View>
                    <Text style={styles.checkIncheckOutTxt}>Check in</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.dateTxt}>12</Text>
                        <View style={styles.dateView}>
                            <Text style={styles.yearTxt}>Sep 2019</Text>
                            <Text style={styles.dayTxt}>Wednesday</Text>
                        </View>
                    </View>
                </View>

                <FontAwesome name="long-arrow-right" size={20} style={{marginTop: hp('2%')}}/>

                <View>
                    <Text style={styles.checkIncheckOutTxt}>Check out</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.dateTxt}>14</Text>
                        <View style={styles.dateView}>
                            <Text style={styles.yearTxt}>Sep 2019</Text>
                            <Text style={styles.dayTxt}>Friday</Text>
                        </View>
                    </View>
                </View>

            </View>

            <View style={styles.bottomLine}/>

            <View style={styles.guestView}>
                <Text style={styles.guestTxt}>Guests</Text>

                <TouchableOpacity
                onPress={() => setModalVisible(true)}
                >
                <Text style={styles.guestBtnTxt}>1 guest</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomLine}/>

            <View style={styles.chargesDetailView}>
            <Text style={styles.taxDetailTxt}>Fee & Tax Details</Text>

            <View style={styles.serviceTopView}>
                <Text style={styles.serviceTxt}>Rs 10000 x 2 night</Text>
                <Text style={styles.serviceFeeTxt}>20000</Text>
            </View>

            <View style={styles.serviceView}>
                <Text style={styles.serviceTxt}>Cleaning Fee</Text>
                <Text style={styles.serviceFeeTxt}>500</Text>
            </View>

            <View style={styles.serviceView}>
                <Text style={styles.serviceTxt}>Service Fee</Text>
                <Text style={styles.serviceFeeTxt}>350</Text>
            </View>

            <View style={styles.serviceView}>
                <Text style={styles.serviceTxt}>Occupancy taxes & fees</Text>
                <Text style={styles.serviceFeeTxt}>3000</Text>
            </View>

            </View>

            <View style={styles.bottomLine}/>

            <View style={styles.totalChargesView}>
                <Text style={styles.totalCharges}>Total</Text>
                <Text style={styles.totalCharges}>23850</Text>
            </View>

            <View style={styles.bottomLine}/>

            <View style={styles.paymentMethodView}>
                <Text style={styles.paymentMehtodTxt}>Payment Method</Text>
                <View style={styles.paymentImgView}>
                <Image source={require('../../assets/images/visa.png')} style={styles.paymentImages}/>
                <Image source={require('../../assets/images/paypal.png')} style={styles.paymentImages}/>
                <Image source={require('../../assets/images/mastercard.png')} style={styles.paymentImages}/>
                </View>
                <Text style={styles.cardNumberTxt}>Card Number</Text>
                
                <View style={styles.cardRound}>
                <TextInput 
                placeholder = " 01364 54 "
                placeholderTextColor = "grey"
                style = {styles.cardNumberInput}
                />
                </View>

                <View style={styles.cardInfoView}>
                    <Text style={styles.cardNumberTxt}>NAME ON CARD</Text>
                    <Text style={styles.cardNumberTxt}>EXP DATE</Text>
                    <Text style={styles.cvvTxt}>CVV</Text>
                </View>
                <View style={styles.cardNumberInputView}>
                    <View style={styles.cardName}>
                    <TextInput 
                    placeholder = ""
                    style = {styles.cardNumberPlaceHolder}
                    />
                    </View>

                    <View style={styles.cardEXP}>
                    <TextInput 
                    placeholder = "MM/YY"
                    style = {styles.cardNumberPlaceHolder}
                    />
                    </View>

                    <View style={styles.cardCVV}>
                    <TextInput 
                    placeholder = ""
                    style = {styles.cardNumberPlaceHolder}
                    />
                    <FontAwesome name="question-circle" size={15} style={styles.questionIcon}/>
                    </View>
                </View>

                <View style={{marginTop: hp('3%')}}></View>

            </View>
            </ScrollView>
            <View style={styles.checkOutBtnView}> 
                <TouchableOpacity
                style={styles.checkoutButton}
                >
                    <Text style={styles.checkoutTxt}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Checkout;
