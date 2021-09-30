import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Styles';
const RoundButtonDetailedPlace = (props) => {
  return (
    <TouchableOpacity style={styles.buttonLogin}
        //  onPress={() => navigation.navigate('Imageslider')}
        >
          <Text style = {styles.placeTxt}>{props.placeName}</Text>
        </TouchableOpacity>
  );
}
export default RoundButtonDetailedPlace;
