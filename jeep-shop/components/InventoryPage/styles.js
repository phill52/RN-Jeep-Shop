import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
    pageContainer:{
        width: '100%',
        height: '100%',
        marginTop: '30%',
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
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
    },
    cars:{
        marginTop:'12%',
        flexDirection:'row',
        justifyContent:'center',
    }
});

export default styles;