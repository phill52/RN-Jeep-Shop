import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import CarSale from './CarSale/index.js'
const InventoryPage = (props) => {
    return(
        <View style={styles.pageContainer}>
            <View style={styles.cars}>
                <CarSale />
                <CarSale />
                <CarSale />
            </View>
        </View>
    );
};

export default InventoryPage;