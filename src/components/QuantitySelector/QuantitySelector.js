import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './Styles';

const QuantitySelector = (props) => {
    const [Room, setRooms] = useState(0);
    return (
        <View style = {styles.row}>
            <View>
                <Text style = {styles.rbbTxt}>{props.line}</Text>
            </View>
            <View style ={styles.btnView}>
                <Pressable 
                onPress ={() => setRooms(Math.max(0, Room - 1))}
                style = {styles.buttonNegative}
                >
                    <Text style ={styles.btnTxt}>-</Text>
                </Pressable>

                <Text style ={styles.rbb1Txt}>{Room}</Text>

                <Pressable 
                onPress ={() => setRooms(Room + 1)}
                style = {styles.buttonPositive}
                >
                    <Text style ={styles.plusTxt}>+</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default QuantitySelector;
