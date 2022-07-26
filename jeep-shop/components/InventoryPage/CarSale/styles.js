import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    invContainer:{
        marginTop: 30,
        width: 175,
        height: 175,
        alignItems: 'center',
        alignContent:'stretch',
    },
    titleContainer:{
        width:'100%',
        alignItems: 'center',
    },
    title:{
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center',
    },
    subtitles:{
        fontFamily: 'Helvetica',
        fontSize: 10,
        color: '#404040',
        textAlign: 'center',
        alignItems: 'center',
    },
    image:{
        width:'100%',
        height:'70%',
    },
    button:{
        color: '#ff0000',
    },
});

export default styles;