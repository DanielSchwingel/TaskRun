import React from 'react';
import { View, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import logoImg from '../../assets/images/logo.png';

export default function SideBar(props){
    
    function closeDrawer(){
        props.navigation.toggleDrawer()
    }
    
    return(
        <DrawerContentScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image source={logoImg} style={styles.imageLogo} />
                    <View>
                        <Text style={styles.title}>TaskRun</Text>
                        <Text style={[styles.subtitle, {paddingLeft: 15}]}>Menu de navegação</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={closeDrawer}>
                    <Icon name={'times'} size={20} color='#5B2121' />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <DrawerItemList
                    itemStyle= {
                        {
                            marginHorizontal: 0, 
                            marginVertical: 0
                        }
                    }
                    labelStyle={styles.title}
                    activeTintColor='red'
                {...props}  
                />
            </View>            
            <View style={styles.footer}>
                <TouchableOpacity omPress={()=>{}} style={styles.logout}>
                    <Icon name={'power-off'} size={20} color='#5B2121' />
                    <Text style={styles.title}>Logout</Text>
                </TouchableOpacity>
                <Text style={[styles.subtitle,{marginTop: 70}]}> Versão 1.0.0</Text>
            </View>
        </DrawerContentScrollView>
    )

}