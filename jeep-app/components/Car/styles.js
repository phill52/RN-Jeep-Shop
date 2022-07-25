import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
    carContainer:{
        width: '100%',
        height: '100%',
    },
    titles:{
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title:{
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 35,
        justifyContent: 'center',
    },
    subtitles:{
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: '#404040',
        justifyContent: 'center',
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
});

export default styles;