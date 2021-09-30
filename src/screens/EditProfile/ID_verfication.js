import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import * as TASKS from '../../store/actions';
import * as Util from '../../store/utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {connect} from 'react-redux';

const IDVerfication = props => {
  const [IDimage, setIDimage] = useState('');
  const [IDimagebase64, setIDimagebase64] = useState('');
  const [IDType, setIDType] = useState('');
  const ImageUpload = type => {
    Util.getPicture(
      type,
      ({assets}) => {
        console.log(assets[0]);
        setIDimage(assets[0].uri);
        if (assets[0].type == 'image/jpeg') {
          setIDimagebase64('data:image/jpeg;base64,' + assets[0].base64);
        }
        if (assets[0].type == 'image/png') {
          setIDimagebase64('data:image/png;base64,' + assets[0].base64);
        }
        if (assets[0].type == 'image/jpg') {
          setIDimagebase64('data:image/jpg;base64,' + assets[0].base64);
        }
      },
      err => {
        console.log(err);
      },
    );
  };

  const uploadFile = () => {
    const userToken = props.user.token;
    if (IDimage && props.user) {
      const form = new FormData();
      form.append('identification_type', IDType);
      form.append('base64_image', IDimagebase64);
      props.governmentId(form, userToken);
    }
  };
  return (
    <ScrollView
      style={[styles.container, {paddingHorizontal: wp('5%')}]}
      contentContainerStyle={{paddingVertical: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: hp('3%'),
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <FontAwesome
            name={'long-arrow-left'}
            size={20}
            style={{color: '#414141'}}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>ID Verification</Text>
      </View>
      <View style={[styles.picker, {marginHorizontal: 0}]}>
        <Picker
          style={{
            marginHorizontal: wp('4%'),
            textAlign: 'left',
          }}
          selectedValue={IDType}
          onValueChange={(itemValue, itemIndex) => {
            setIDType(itemValue);
            console.log(itemValue);
          }}
          prompt="Select ID Type"
          itemStyle={{
            backgroundColor: 'grey',
            color: 'blue',
            fontFamily: 'Ebrima',
            fontSize: 17,
          }}>
          <Picker.Item label="Select ID Type" />
          <Picker.Item label="CNIC" value="CNIC" />
          <Picker.Item label="Passport" value="PASSPORT" />
          <Picker.Item label="Driver License" value="DRIVER LICENSE" />
        </Picker>
      </View>
      {IDType ? (
        <View>
          <View style={styles.modalView}>
            <View style={{width: '100%', flexDirection: 'row'}}>
              <Image
                source={
                  IDimage
                    ? {uri: IDimage}
                    : require('../../assets/images/placeholder.png')
                }
                style={styles.placeholderImg}
              />
            </View>
            {!IDimage ? (
              <View style={styles.imageBtnView}>
                <TouchableOpacity
                  style={styles.buttonImg}
                  onPress={() => ImageUpload('camera')}>
                  <Text style={styles.imagesTxt}>Open Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonImg}
                  onPress={() => ImageUpload('gallery')}>
                  <Text style={styles.imagesTxt}>Open Gallery</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.imageBtnView}>
                <TouchableOpacity
                  style={styles.buttonImg}
                  onPress={() => setIDimage(null)}>
                  <Text style={styles.imagesTxt}>REMOVE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonImg}
                  onPress={() => uploadFile()}>
                  <Text style={styles.imagesTxt}>Upload</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};
const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    governmentId: (params, token) =>
      dispatch(TASKS.GovernmentID(params, token)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(IDVerfication);
