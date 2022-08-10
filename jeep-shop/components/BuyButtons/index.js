import React from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const StyledButton = (props) => {
    
    const navigation = useNavigation();
    const { type, content, screenName} = props;
    const backColor = type === 'custom' ? '#545454' : '#c7c5c5';
    const textColor = type === 'custom' ? '#c7c5c5' : '#545454';

    return(
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backColor}]} onPress={() => navigation.navigate(screenName)} >
            <Text style={[styles.text, {color: textColor}]} > {content} </Text>
            </Pressable> 
        </View>
    );
};

export default StyledButton;