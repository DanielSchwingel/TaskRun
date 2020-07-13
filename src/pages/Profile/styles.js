import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#FFF',
        padding: 15,
        alignItems: 'center'
    },
    cardUser: { 
        backgroundColor: '#5B2121',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        marginBottom: 15,
        width: '100%'
    },
    nameUser : {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18,
        color: '#FFF',
        marginBottom: 5,
    },
    infosUser : {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 13,
        color: '#FFF',
    },
    imageUser : {
        marginBottom: 15,
    },
    title : {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 16
    },
    button : {
        backgroundColor: '#5B2121',
        padding: 15,
        alignItems: 'center',
        borderRadius: 90,
        marginTop: 20
    },

    buttonDescription: {
        color: '#9E7D7B',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 14
    }
})