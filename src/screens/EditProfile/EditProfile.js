import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../../components/FormInput/FormInput';
import styles from './Styles';
import {connect} from 'react-redux';
import * as TASKS from '../../store/actions';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import TextInputMask from 'react-native-text-input-mask';
import * as Util from '../../store/utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width} = Dimensions.get('window').width;

const EditProfile = React.memo(({navigation, user, ProfileUpdate, loader}) => {
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [phone, setPhone] = useState();
  const [maskedNo, setMaskedNo] = useState('');
  
  const [phoneError, setPhoneError] = useState({error: false, msg: ''});
  const [fNameError, setFnameError] = useState({error: false, msg: ''});
  const [lNameError, setLnameError] = useState({error: false, msg: ''});
  const [genderError, setGenderError] = useState({error: false, msg: ''});
  const [dobError, setdobError] = useState({error: false, msg: ''});

  useEffect(() => {
    const data = user;
    if (data) {
      setFirst_name(data.first_name);
      setLast_name(data.last_name);
      setGender(data.user_info.gender);
      setDob(data.user_info.date_of_birth);
      setPhone(
        data.user_info.phone_number != null ||
          data.user_info.phone_number != 'undefined'
          ? data.user_info.phone_number
          : '',
      );
      setMaskedNo(data.user_info.phone_number);
    }
  }, []);

  const Update = React.useCallback(() => {
    console.log(first_name, last_name, dob, gender, phone);
    if (
      first_name?.length &&
      last_name?.length &&
      gender?.length &&
      dob?.length &&
      phone &&
      phone?.length >= 11
    ) {
      const obj = {
        first_name: first_name.replace(/ /g, ''),
        last_name: last_name.replace(/ /g, ''),
        gender,
        date_of_birth: dob,
        phone_number: phone,
      };
      ProfileUpdate(obj, user.token);
    }
    if (!first_name) {
      setFnameError({error: true, msg: 'please enter first name!'});
    }
    if (!last_name) {
      setLnameError({error: true, msg: 'please enter last name!'});
    }
    if (!gender) {
      setGenderError({error: true, msg: 'please select gender!'});
      console.log(genderError);
    }
    if (!dob) {
      setdobError({error: true, msg: 'please enter date of birth!'});
    }
    if (!phone || phone.length < 11) {
      setPhoneError({error: true, msg: 'please enter a valid phone number!'});
    }
  });

  if (loader)
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {Util.Lumper()}
      </View>
    );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          style={{marginTop: hp('3%')}}
          onPress={() => navigation.navigate('Settings')}>
          <FontAwesome
            name={'long-arrow-left'}
            size={20}
            style={{color: '#414141'}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={Update}>
          <Text style={styles.saveTxt}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: hp('3%')}}>
        <Text style={styles.editProfileTxt}>Edit Profile</Text>

        <View style={{marginTop: hp('3%')}}>
          <FormInput
            value={first_name}
            onchange={setFirst_name}
            placeholderText="John"
          />
          {fNameError.error && (
            <Text style={styles.errMsg}>{fNameError.msg}</Text>
          )}

          <FormInput
            value={last_name}
            onchange={setLast_name}
            placeholderText="Doe"
          />
          {lNameError.error && (
            <Text style={styles.errMsg}>{lNameError.msg}</Text>
          )}
          <View style={styles.picker}>
            <Picker
              style={{marginHorizontal: wp('4%')}}
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
          {genderError.error && (
            <Text style={styles.errMsg}>{genderError.msg}</Text>
          )}

          <View style={styles.picker}>
            <DatePicker
              date={dob}
              mode="date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              androidMode="spinner"
              onDateChange={date => {
                setDob(date);
              }}
              style={styles.datePick}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  textAlign: 'left',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                },
              }}
            />
          </View>
          {dobError.error && <Text style={styles.errMsg}>{dobError.msg}</Text>}

          <TextInputMask
            keyboardType={'number-pad'}
            onChangeText={(formatted, extracted) => {
              setMaskedNo(formatted);
              setPhone(extracted);
            }}
            placeholder={'(0000) 000 00 00'}
            value={maskedNo ? maskedNo : ''}
            defaultValue={maskedNo ? maskedNo : ''}
            mask={'([0000]) [000] [00] [00]'}
            // keyboardType={'number-pad'}
            style={{
              flexDirection: 'row',
              width: width,
              elevation: 2,
              borderRadius: 40,
              alignItems: 'center',
              backgroundColor: '#fff',
              marginTop: hp('3%'),
              marginHorizontal: wp('5%'),
              paddingHorizontal: 20,
            }}
          />
          {phoneError.error && (
            <Text style={styles.errMsg}>{phoneError.msg}</Text>
          )}
        </View>

        <View style={styles.lastView}>
          <Text style={styles.idTxt}>Government ID</Text>

          {user?.identity_verification ? (
            <Text
              style={[
                styles.addBtn,
                styles.addTxt,
                {textTransform: 'uppercase'},
              ]}>
              {user.identity_verification}
            </Text>
          ) : (
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('idVerfication')}>
              <Text style={styles.addTxt}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
});

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loader: state.ui.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ProfileUpdate: (params, token) =>
      dispatch(TASKS.ProfileUpdate(params, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
