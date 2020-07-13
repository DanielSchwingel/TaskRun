import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

export default function SideBar(props){
    
    function closeDrawer(){
        props.navigation.toggleDrawer()
    }
    
    return(
        <DrawerContentScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>

                </View>
                <TouchableOpacity onPress={closeDrawer}>
                    <Icon name={'times'} size={28} color='#5B2121' />
                </TouchableOpacity>
            </View>
            
            <DrawerItemList {...props}  />
        </DrawerContentScrollView>
    )

}