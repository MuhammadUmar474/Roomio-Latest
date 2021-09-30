import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, Image, ToastAndroid, Platform, AlertIOS } from 'react-native';
import styles from './Styles';
import * as TASKS from '../../store/actions';
import * as Util from '../../store/utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AddImages = ({navigation, route}) => {
    const [listingImages, setListingImages] = useState([]);
    const [listingImagesError, setListingImagesError] = useState({error: false, msg: ''});
    let data = route.params;
    console.log("Props", data.search, data.guest, data.bed, data.bedroom, data.sharedBath, data.privateBath,
    data.Country, data.Street, data.State, data.City, data.ZipCode, data.Id, data.Title, data.Price, data.Currency);

    const ImageUpload = type => {
        Util.getMultiplePictures(
          type,
          ({assets}) => {
              setListingImages([...listingImages,...assets]);
            // if (assets[0].type == 'image/jpeg') {
            //   setIDimagebase64('data:image/jpeg;base64,' + assets[0].base64);
            // }
            // if (assets[0].type == 'image/png') {
            //   setIDimagebase64('data:image/png;base64,' + assets[0].base64);
            // }
            // if (assets[0].type == 'image/jpg') {
            //   setIDimagebase64('data:image/jpg;base64,' + assets[0].base64);
            // }
          },
          err => {
            console.log(err);
          },
        );
      };

      function removeImage(id) {
        const filteredArray = listingImages.filter((_,index) => index !== id);
        setListingImages(filteredArray);

      }

      const Validation = () => {
        if (listingImages <= 0){
          setListingImagesError({error: true, msg: 'Please add atleast one Image !'});
          return;
        }
        navigation.navigate('Amenities', {...data})
      }

    return (
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Name Listing')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>Add Listing Images</Text>
                <Text style={styles.belowHeadingTxt}>Photos helps guests imagine their stay at your place. 
                You can start with one photo and add more photos or update existing photos later.</Text>

                <View style={styles.imageContainer}>
                    <Pressable style = {styles.imageView} onPress={() => ImageUpload('gallery')}>
                        <Ionicons name = "add-outline" size = {100} />
                    </Pressable>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
                <View style={{width: '100%', height: '40%', flexDirection: 'row'}}>
                    {listingImages?.map((image,index) =>{
                      
                      return (
                      <View key={index}>
                        <Image
                          source={{uri:image.uri}}
                          style={styles.placeholderImg}
                        />
                        <TouchableOpacity style={styles.cancelIcon} onPress ={() => removeImage(index)}>
                          <FontAwesome name={"times"} size={15} color={"red"}/>
                        </TouchableOpacity>
                      </View>
                      )
                      })}
                </View>
                
                </ScrollView>
                {listingImagesError.error && (
                    <Text style={styles.errMsg}>{listingImagesError.msg}</Text>
                )}

                <View style = {{alignItems: 'flex-end', marginTop: hp('2%')}}>
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

export default AddImages;
