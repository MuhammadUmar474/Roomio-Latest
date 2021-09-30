import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const BedTypes = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal: wp('4%')}}>
                <TouchableOpacity style={styles.backBtn}  onPress = {() => navigation.navigate('Add Listing')}>
                    <FontAwesome name={"long-arrow-left"} size={20} style={{ color: "#414141" }}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>What Kind of Beds Will Be Provided ?</Text>

                <View style={styles.selectionView}>
                    <Text style={styles.selectionViewTxt}>Bedroom 1</Text>
                    <TouchableOpacity style={{marginRight: wp('2%')}} onPress = {() => navigation.navigate('Bed Type Select', 
                    {data: data })}>
                    <Text style={styles.selectTxt}>Select</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.selectionView}>
                    <Text style={styles.selectionViewTxt}>Bedroom 2</Text>
                    <TouchableOpacity style={{marginRight: wp('2%')}} onPress = {() => navigation.navigate('Bed Type Select1')}>
                    <Text style={styles.selectTxt}>Select</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.selectionView}>
                    <Text style={styles.selectionViewTxt}>Common spaces</Text>
                    <TouchableOpacity style={{marginRight: wp('2%')}} onPress = {() => navigation.navigate('Bed Type Select2')}>
                    <Text style={styles.selectTxt}>Select</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{alignItems: 'flex-end', marginTop: hp('33%')}}>
                <TouchableOpacity style={styles.buttonNext}
                onPress={() => navigation.navigate('Bathroom')}
                >
                  <Text style = {styles.nextTxt}>Next</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BedTypes;
