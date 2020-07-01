import React from 'react';
import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

export default function Header (props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <StatusBar barStyle='dark-content' backgroundColor='#FFF'/>   
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name={'bars'} size={20} color='#5B2121'/>
            </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.titleDescription}>{props.title}</Text>
            </View>
        </View>
    )
}