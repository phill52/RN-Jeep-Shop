import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles.js';
import StyledButton from '../BuyButtons/index.js';

const CarItem = (props, {navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.carContainer}>
                <ImageBackground source={require('../../assets/images/Photos-Jeep-2017-Compass-Limited-White-Roads-Motion-auto-.jpg')} style={styles.image}/>
                <View style={styles.titles}>
                    <Text style={styles.title}>Compass</Text>
                    <Text style={styles.subtitles}>Starting at $25,602</Text>
                </View>
                <StyledButton type='custom' content={"Custom Order"} screenName="InventoryPage" />
                <StyledButton type='inventory' content={"Existing Inventory"} screenName="InventoryPage"/>
            </View>
        </View>
     );
};

export default CarItem;