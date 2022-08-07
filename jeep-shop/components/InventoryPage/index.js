import React, { useState } from 'react';
import {View, Text, Image, Alert} from 'react-native';
import styles from './styles.js';
import CarSale from './CarSale/index.js'
import CompassList from './CompassList.js';
import { render } from 'react-dom';
import { FlatGrid } from 'react-native-super-grid';


const InventoryPage = (props) => {

    const[carItems, setcarItems] = useState(
        CompassList.map((CompassCar, index) => ({
            id: CompassCar.id,
            year: CompassCar.year,
            trim: CompassCar.trim,
            price: CompassCar.price,
            image: CompassCar.image,
        }))
    );

    const handleDelete = (id) => {
        Alert.alert('Purchased!');
        const carList= carItems.filter(car => car.id != id);
        setcarItems(carList);
    }
    return(
        <View style={styles.pageContainer}>
                <FlatGrid itemDimension={130}
                    data={carItems}
                    style={styles.gridView}
                    spacing={20}
                    renderItem={ ({ item }) => (
                        <View>
                            <CarSale id={item.id} year={item.year} price={item.price} trim={item.trim} image={item.image} onDelete={handleDelete}/>
                        </View>
                    )}/>
        </View>
    );
};

export default InventoryPage;