import React from 'react';
import {View, Text, Alert, Image, Button} from 'react-native';
import styles from './styles';

const CarSale= (props) => {
    const {year, trim, price, image, empty} = props;
    if (empty) {
        return (
            <View style={styles.invContainer}>
            </View>
        );
    }
    return(
        <View style={styles.invContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{year} {trim}</Text>
                <Text style={styles.subtitle}> ${price} </Text>
            </View>
            <Image style={styles.image} source={require({image})} />
            <Button color='#ff0000'  title="Purchase" onPress={()=>Alert.alert('Purchased!')}></Button>
        </View>
    );
};

export default CarSale;