import React from 'react';
import { View, Text, Image } from 'react-native';

import Header from '../../components/Header';
import Cards from '../../components/Cards';

import styles from './styles';
import userImg from '../../assets/images/user.png';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Header title="Meu perfil"/>
            <View style={styles.cardUser}>
                <Image source={userImg} style={styles.imageUser}/>
                <Text style={styles.nameUser}>Daniel Filipe Schwingel</Text>
                <Text style={[styles.infosUser, {marginBottom: 10}]}>danielfilipeschwingel@gmail.com</Text>
                <Text style={styles.infosUser}>Menbro desde 01/07/2020</Text>
            </View>
            <Text style={styles.title}>Minhas tarefas</Text>
            <Cards />
        </View>
        

    )
}