import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import CarSale from './CarSale/index.js'
import CompassList from './CompassList.js';
import { render } from 'react-dom';

const InventoryPage = (props) => {
    let half = Math.ceil(CompassList.length/2)
    const renderList= []
    for(let i=0; i<half; i++){
        let renderItem=[];
        for(let j=i*2; j<=i+1; j++){
            renderItem.push(<CarSale year={CompassList[j].year} price={CompassList[j].price} trim={CompassList[j].trim} image={CompassList[j].image} />);
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