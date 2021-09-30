import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Modal, Pressable, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatepickerRange from '../react-native-range-datepicker/RangeDatepicker/index';
import StarRating from 'react-native-star-rating';
import Graph from '../Graph/Graph';
import styles from './Styles';
// import Rheostat from "react-native-rheostat";
// const {width} = Dimensions.get('window').width;

const SimplePlaces = () => {

  const [Room, setRooms] = useState(0);
  const [Bed, setBeds] = useState(0);
  const [Bathroom, setBathrooms] = useState(0);

  // useEffect(()=>{
  //   console.log("Test Room", Room);
  //   console.log("Test Bed", Bed);
  //   console.log("Test BathRoom", Bathroom);
  // })

  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const width = wp('45%');
  const height = hp('37%');

  const [defaultRating, setDefaultRating] = useState(3);
  const [active, setActive] = useState(0);
  const images = [
    'https://images.pexels.com/photos/4346353/pexels-photo-4346353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6077783/pexels-photo-6077783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5117800/pexels-photo-5117800.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/4131522/pexels-photo-4131522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/6102477/pexels-photo-6102477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
 
  const handleChange = (value) => {
    setDefaultRating(value);
  }

  return (
    <View style={styles.container}>
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
            
            <View style={styles.modelBtnView}>
            <TouchableOpacity
              style={{justifyContent:'flex-start'}}
                onPress={() => setModalVisible(!modalVisible)} 
            >
                <FontAwesome name={"arrow-left"} size={25} />
            </TouchableOpacity>

                <Text style={styles.filterTxt}> Filters </Text>

            <TouchableOpacity 
            >
                <Text style={styles.resetTxt}> Reset </Text>
            </TouchableOpacity>

              
            </View>

            <Text style={styles.properTypeTxt}>Property Type</Text>

            <View style = {{ height: hp('8%'), marginTop: hp('2%')}}>
            <View style = {styles.properTypeView}>
                <TextInput 
                underlineColorAndroid = "transparent"
                placeholder = " Select Property Type "
                placeholderTextColor = "grey"
                style = {styles.propertyPlaceHolder}
                />
            </View>
            </View>

            <View style={{marginTop: hp('1%')}}>
              <View style={styles.priceRangeView}>
                <Text style={styles.priceRangeTxt}>Price Range</Text>
                <Text style={styles.priceRangeTxt}>900 to 10000</Text>
              </View>
              <Text style={{color: '#414141'}}>The average price per night is 900</Text>

              {/* <Rheostat values={demoTwoValues} min={0} max={100} 
              snap snapPoints={demoSnaps}/> */}
              <View>
                <Graph />
              </View>

            </View>
              <Text style={styles.availabilityTxt}>Availability</Text>
              <View style={styles.checkInView}>
                <Text style={styles.checkInTxt}>Check in/Check out</Text>
                <TouchableOpacity style={styles.buttonCalender}
                onPress={() => setSecondModalVisible(true)}
                >
                  <Text style = {styles.showCalenderTxt}>Show Calender</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.roomsTxt}>Rooms and Beds</Text>

              <View>
              <View style = {styles.row}>
                <View>
                    <Text style = {styles.rbbTxt}>1 Room</Text>
                </View>
                <View style ={styles.btnView}>
                    <Pressable 
                    onPress ={() => setRooms(Math.max(0, Room - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={styles.btnTxt}>-</Text>
                    </Pressable>

                    <Text style ={styles.rbb1Txt}>{Room}</Text>

                    <Pressable 
                    onPress ={() => setRooms(Room + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={styles.plusTxt}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {styles.rbbTxt}>2 Bed</Text>
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
                    onPress ={() => setBeds(Bed + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={styles.plusTxt}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {styles.rbbTxt}>1 Bathroom</Text>
                </View>
                <View style ={styles.btnView}>
                    <Pressable 
                    onPress ={() => setBathrooms(Math.max(0, Bathroom - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={styles.btnTxt}>-</Text>
                    </Pressable>

                    <Text style ={styles.rbb1Txt}>{Bathroom}</Text>

                    <Pressable 
                    onPress ={() => setBathrooms(Bathroom + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={styles.plusTxt}>+</Text>
                    </Pressable>
                </View>
            </View>
              </View>

              <View style={styles.cancelSaveView}>
                <TouchableOpacity>
                  <Text style={styles.cancelTxt}> Cancel </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonFilter}
                //  onPress={() => navigation.navigate('Imageslider')}
                >
                  <Text style = {styles.saveTxt}>Save</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setSecondModalVisible(!secondModalVisible);
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <View style={styles.modelBtnView}>
            <TouchableOpacity
              style={{justifyContent:'flex-start'}}
                onPress={() => setSecondModalVisible(!secondModalVisible)} 
            >
                <FontAwesome name={"arrow-left"} size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.resetTxt}> Reset </Text>
            </TouchableOpacity>
            </View>
              <DatepickerRange
              startDate = '13052017'
              untilDate = '26062017'
              onConfirm = {( startDate, untilDate ) => this.setState({ startDate, untilDate })}
              />

              <TouchableOpacity style={styles.buttonFilterCalender}
              //  onPress={() => navigation.navigate('Imageslider')}
              >
                <Text style = {styles.applyFilterTxt}>Apply Filter</Text>
              </TouchableOpacity>

          </View>
        </View>
      </Modal>

      
          <View style={{flex: 2}}>
            <ScrollView
              pagingEnabled
              horizontal
              onScroll={change}
              scrollEventThrottle={16}
              showHorizontalScrollIndicator={false}
              style={{width, height}} >

              {images.map((image, index) => (
                <Image
                  key={index}
                  source={{uri: image}}
                  style={{width, height, resizeMode: 'cover'}}
                />
              ))}
              <FontAwesome name={"heart"} size={20} color={"red"} style={styles.heartIcon}/>
            </ScrollView>
            <View style={styles.pagination}>
                {images.map((i, k) => (
                <Text key={k} style={k === active ? styles.activeDot : styles.dot}>
                    •
                  </Text>
                ))}
          </View>
            </View>
               <Pressable style={{flex: 1, padding: 2}} onPress={() => setModalVisible(true)}>
                <Text style={styles.cityTxt}>ISLAMABAD</Text>

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
                </View>
                <Text style={styles.descTxt}>Classical Apartment on the Royal Mile</Text>
                <Text style={styles.priceTxt}>Rs 10000/night</Text>
               </Pressable>
          </View>
  );
}

export default SimplePlaces;
