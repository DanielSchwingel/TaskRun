import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor: '#FEEEEE',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15,
        marginBottom: 20
    },

    userInfo: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        width: '70%',
        borderBottomEndRadius: 20,
        flexDirection: 'row'
    },
    
    imageLogo: {
        width: 50,
        height: 50
    },

    body: {
        // backgroundColor: 'blue'       
    },

    footer: {
        marginTop: 350,
        padding: 15
    },

    logout: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 16,
        color: '#5B2121',
        marginLeft: 15,
    },

    subtitle: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 12,
        color: '#9E7D7B'
    }
})