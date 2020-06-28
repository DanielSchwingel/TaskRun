import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    imageBackground : {
        height: 279,
        padding: 30,
        flex: 1,
    },

    imageLogo : {
        marginTop: 50, 
        marginBottom: 20
    },

    welcome : {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 20,
        color: '#5b2121',
    },

    title : {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 38,
        color: '#5b2121',
        marginBottom: 25
    },

    description : {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 14,
        color: '#5b2121',
        marginBottom: 30
    },
    
    buttonGrid : {
        flexDirection : 'row',
        marginBottom: 30,
        justifyContent: 'space-between'
    },

    buttonBiometry: {
        width: '45%',
        backgroundColor: '#FEEEEE',
        flexDirection: 'row',
        borderRadius: 12,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButtonBiometry: {
        color: '#F45656',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 16,
        marginLeft: 15
    },

    buttonAccess: {
        width: '45%',
        backgroundColor: '#f45656',
        flexDirection: 'row',
        borderRadius: 12,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'   
    },

    textButtonAccess: {
        color: '#FFF',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 16,
        marginRight: 15
    },
})