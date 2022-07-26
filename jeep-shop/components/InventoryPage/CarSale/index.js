import React from 'react';
import {View, Text, Alert, Image, Button} from 'react-native';
import styles from './styles';

const CarSale= (props) => {
    return(
        <View style={styles.invContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>2022 Compass (RED) 4X4</Text>
                <Text style={styles.subtitle}> $39,725 </Text>
            </View>
            <Image style={styles.image} source={require('../../../assets/images/CompassModels/red2022.jpg')} />
            <Button color='#ff0000'  title="Purchase" onPress={()=>Alert.alert('Purchased!')}></Button>
        </View>
    );
};

export default CarSale;