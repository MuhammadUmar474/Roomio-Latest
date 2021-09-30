import React from 'react';
import { ScrollView } from 'react-native';
import BookingCard from '../../../components/BookingCard/BookingCard';
import styles from './Styles';

const Booked = () => {
    return (
        <ScrollView showsVerticalScrollIndicator = {false}
        style={styles.container}>
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
        </ScrollView>
    )
}

export default Booked;
