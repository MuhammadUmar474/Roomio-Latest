import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FromGuest from './FromGuest';
import FromHost from './FromHost';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#EE2073",
                indicatorStyle:{ backgroundColor: "#EE2073", width: wp('20%'), marginLeft: wp('5%') },
                labelStyle: { fontSize: 12,  },
                style: { backgroundColor: 'white', left: wp(30), borderColor: 'white', elevation: 0, width: wp(60)}
            }}
            >
          <Tab.Screen 
            name="From Host" 
            component={FromHost}
            />
          <Tab.Screen name="From Guest" component={FromGuest} />
        </Tab.Navigator>
      );
}

export default TopTabs;
