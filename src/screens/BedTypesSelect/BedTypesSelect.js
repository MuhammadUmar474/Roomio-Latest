import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
const BedTypesSelect = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator = {false} 
            style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Bed Types')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>Bedroom 1</Text>

                <QuantitySelector line="Double" />
                <QuantitySelector line="Single" />
                <QuantitySelector line="King" />
                <QuantitySelector line="Queen" />
                <QuantitySelector line="Sofa Bed" />
                <QuantitySelector line="Small Double" />
                <QuantitySelector line="Couch" />
                <QuantitySelector line="Bunk Bed" />
                <QuantitySelector line="Floor Mattress" />

                <View style = {{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => navigation.navigate('Bed Types')}
                >
                  <Text style = {styles.nextTxt}>Save</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default BedTypesSelect;
