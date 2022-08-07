import React, { useState } from 'react';
import {View, Text, Image, Alert} from 'react-native';
import styles from './styles.js';
import CarSale from './CarSale/index.js'
import CompassList from './CompassList.js';
import { render } from 'react-dom';

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

    let half = Math.ceil(carItems.length/2)
    const renderList= []
    for(let i=0; i<half; i++){
        let renderItem=[];
        for(let j=i*2; j<=i+1; j++){
            renderItem.push(<CarSale id={carItems[j].id} year={carItems[j].year} price={carItems[j].price} trim={carItems[j].trim} image={carItems[j].image} onDelete={handleDelete} />);
        }
        if (renderItem.length===2){
            renderList.push(<View style={styles.cars}>
                {renderItem[0]}
                {renderItem[1]}
            </View>)
        }
        else{
            renderList.push(<View style={styles.cars}>
                {renderItem[0]}
                <CarSale empty={true}/>
            </View>)
        }
    }
    return(
        <View style={styles.pageContainer}>
            {renderList}
        </View>
    );
};

export default InventoryPage;