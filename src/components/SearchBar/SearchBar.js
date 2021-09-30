import React from 'react';
import { View, Image, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';

const SearchBar = () => {
  return (
    <View style = {{flex: 1}}>
        <View style = {{ height: 50, marginTop: 20}}>
            <View style = {styles.searchView}>
                <FontAwesome 
                name = {"search"} 
                size = {18} 
                color={'#ABABAB'} 
                style = {{marginTop: 10, marginLeft: 2}} />
                <TextInput 
                underlineColorAndroid = "transparent"
                placeholder = "   Try  'Islamabad' "
                placeholderTextColor = "grey"
                style = {styles.placeholderTxt}
                />
                <Image source={require('../../assets/images/levels.png')} style = {styles.icon}/>
            </View>
        </View>
    </View>
  );
}

export default SearchBar;
