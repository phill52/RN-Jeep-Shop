import React from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;
    const backColor = type === 'custom' ? '#545454' : '#c7c5c5';
    const textColor = type === 'custom' ? '#c7c5c5' : '#545454';
    return(
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backColor}]} onPress={() => {console.warn('you are getting this')}}>
            <Text style={[styles.text, {color: textColor}]} > Custom Order </Text>
            </Pressable> 
        </View>
    );
};

export default StyledButton;