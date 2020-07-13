import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        width: '100%',
    },
    cardsGrid : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    taskPending: {
        backgroundColor: '#EEF7FE',
        width : '45%',
        padding: 10,
        borderRadius: 12
    },
    taskOverdue: {
        backgroundColor: '#FFFBEC',
        width : '45%',
        padding: 10,
        borderRadius: 12
    },
    taskCanceled: {
        backgroundColor: '#FEEEEE',
        width : '45%',
        padding: 10,
        borderRadius: 12
    },
    taskPerformed: {
        backgroundColor: '#F0FFFF',
        width : '45%',
        padding: 10,
        borderRadius: 12
    },
    iconsGrid : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleCard : {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 15,
        marginTop: 15
    },
    descriptionCard : {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 11,
        marginTop: 5
    }
})