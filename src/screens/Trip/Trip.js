import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import Booked from './Booked/Booked';
import History from './History/History';

const Tab = createMaterialTopTabNavigator();

const Trip = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Explore')}>
            <FontAwesome name={"long-arrow-left"} size={20}/>
        </TouchableOpacity>

        <Text style={styles.TripTxt}>Trip</Text>
      </View>
    
    <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "#41BBB5",
              indicatorStyle:{ backgroundColor: "#41BBB5"}
            }}
            >
          <Tab.Screen 
            name="History" 
            component={History}
            />
          <Tab.Screen name="Booked" component={Booked} />
    </Tab.Navigator>

    </View>
  );
}

export default Trip;
