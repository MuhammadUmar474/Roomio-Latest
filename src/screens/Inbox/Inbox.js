import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChatList from '../../components/ChatList/ChatList';
import SearchContact from '../../components/SearchContact/SearchContact';
import styles from './Styles';

const Inbox = ({navigation}) => {

  return (
    <View style={styles.container}>

        <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Explore')}>
              <FontAwesome name={"long-arrow-left"} size={20}/>
          </TouchableOpacity>

          <Text style={styles.messageTxt}>Messages</Text>
        </View>
      
        <SearchContact />
      
      <Pressable onPress={() => navigation.navigate('Chat Screen')} style={styles.unreadMsg}>
        <Text style={styles.unreadTxt}>Unread Messages</Text>
        <View style={styles.chatView}>
            <Image source={require('../../assets/images/chinies.jpg')} style={styles.img}/>
            <View>
            
            <View style={styles.userView}>
              <Text style={styles.nameTxt}>John Deo</Text>
              <Text style={styles.dayTxt}>Fri</Text>
            </View>

            <View style={styles.btnView}>
              <Text style={styles.seeYouTxt}>See You Soon !</Text>
              <TouchableOpacity style={styles.buttonFilter}
                //  onPress={() => navigation.navigate('Imageslider')}
                >
                  <Text style = {styles.numTxt}>2</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomLine}/>
            
            </View>
          </View>
      </Pressable>

        <View>
          <View style={styles.allMsgView}>
            <Text style={styles.unreadTxt}>All Messages</Text>
          </View>
          <ScrollView
            style={{marginVertical: hp('1%')}} 
            showsVerticalScrollIndicator={false}>
            <ChatList onPress={() => navigation.navigate('Chat Screen')}/>
          </ScrollView>
        </View>
    </View>
  );
}

export default Inbox;
