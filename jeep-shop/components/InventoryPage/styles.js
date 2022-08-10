import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
    pageContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    emptyInventory:{
        color: '#c9c9c9',
        fontFamily: 'Helvetica',
        fontWeight: '100',
        fontStyle: 'italic',
        marginTop:20,
        fontSize: 20,
        textAlign: 'center',
    },
    dropDown:{
        backgroundColor: '#f5f5f5',
        width: '40%',
        marginTop: '2%',
    },
});

export default styles;