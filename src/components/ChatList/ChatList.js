import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import styles from './Styles';

const DATA = [
  {
    id: '01',
    Cname: 'John Doe',
    day: 'Fri',
    message: 'See You Soon'
  },
  {
    id: '2',
    Cname: 'Ali Hassan',
    day: 'Fri',
    message: 'will meet again'
  },
  {
    id: '3',
    Cname: 'Ahmad',
    day: 'Thr',
    message: 'See You again'
  },
  {
    id: '4',
    Cname: 'Umar',
    day: 'Thr',
    message: 'See You Soon'
  },
  {
    id: '5',
    Cname: 'Adnan',
    day: 'Mon',
    message: 'See You again'
  },
  {
    id: '6',
    Cname: 'Kami',
    day: 'Mon',
    message: 'See You again'
  },
  {
    id: '7',
    Cname: 'Dani',
    day: 'Mon',
    message: 'See You again'
  },
];

const Item = ({ Cname, day, message}) => (
  <View style={styles.itemMainView}>

      <Image source={require('../../assets/images/chinies.jpg')} style={styles.img}/>
        <View>
        
        <View style={styles.userNameView}>
          <Text style={styles.nameTxt}>{Cname}</Text>
          <Text style={styles.dayTxt}>{day}</Text>
        </View>

        <View style={styles.msgView}>
          <Text style={styles.msg}>{message}</Text>
        </View>

        <View style={styles.bottomLine} />
        
        </View>
        
    </View>
);

const ChatList = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={props.onPress}>
    <Item Cname={item.Cname} day={item.day} message={item.message} />
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
    </View>
  );
}

export default ChatList;
