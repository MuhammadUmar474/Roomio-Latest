import React from 'react';
import { ScrollView } from 'react-native';
import HistoryCard from '../../../components/HistoryCard/HistoryCard';
import styles from './Styles';
const History = () => {
    return (
        <ScrollView style={styles.container}>
            <HistoryCard word = "Travelled"/>
            <HistoryCard word = "Cancelled" style={{backgroundColor:"#EE2073"}} />
            <HistoryCard word = "Cancelled" style={{backgroundColor:"#EE2073"}} />
            <HistoryCard word = "Travelled"/>
        </ScrollView>
    )
}

export default History;
