import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Styles';

const RoundButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonLogin}
        onPress={props.onPress}>
        <Text style = {styles.placeTxt}>{props.placeName}</Text>
    </TouchableOpacity>
  );
}

export default RoundButton;
