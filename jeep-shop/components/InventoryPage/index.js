import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import CarSale from './CarSale/index.js'
import CompassList from './CompassList.js';

const InventoryPage = (props) => {
    return(
        <View style={styles.pageContainer}>
            <View style={styles.cars}>
                <CarSale year={CompassList[0].year} price={CompassList[0].price} trim={CompassList[0].trim} image={CompassList[0].image} />
                <CarSale year={CompassList[1].year} price={CompassList[1].price} trim={CompassList[1].trim} image={CompassList[1].image} />
            </View>
            <View style={styles.cars}>
                <CarSale year={CompassList[2].year} price={CompassList[2].price} trim={CompassList[2].trim} image={CompassList[2].image} />
                <CarSale empty={true}/>
            </View>
        </View>
    );
};

export default InventoryPage;