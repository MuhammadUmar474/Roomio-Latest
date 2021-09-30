import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const SearchContact = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.mainSearchView}>
            <View style = {styles.searchView}>
                <FontAwesome name = {"search"} size = {18} color={'#ABABAB'} style = {styles.icon} />
                <TextInput 
                underlineColorAndroid = "transparent"
                placeholder = " Search Contact "
                placeholderTextColor = "grey"
                style = {styles.input}
                />
            </View>
        </View>
    </View>
  );
}

export default SearchContact;
