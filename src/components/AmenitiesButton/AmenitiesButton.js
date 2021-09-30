import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';

const RoundButton = (props) => {
  return (
      <TouchableOpacity style={styles.amenityBtn}
          onPress={props.onPress}>
          <Text style = {styles.aminityTxt}>{props.aminity}</Text>
          <FontAwesome name={"times"} size={13} style={{marginLeft: '3%', marginTop: '3%'}}/>
      </TouchableOpacity>
  );
}

export default RoundButton;
