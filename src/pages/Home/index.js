import React from 'react';
import { ImageBackground, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import imageBackground from '../../assets/images/background-home.png';
import imageLogo from '../../assets/images/logo.png';


const Home = () => {
    return (
        <ImageBackground source={imageBackground} style={styles.imageBackground}>
            <Image source={imageLogo} style={styles.imageLogo}/>
            <Text style={styles.welcome}>Bem vindo ao</Text>
            <Text style={styles.title}>TaskRun</Text>
            <Text style={[styles.description, {maxWidth: 220}]}>O “ToDo” mais simples, interarativo e fácil de manusear. Não postergue, realize.</Text>
            <Text style={styles.description}>Bora lá!</Text>
            <View style={styles.buttonGrid}>
                <TouchableOpacity style={styles.buttonBiometry}>
                    <Icon name={'fingerprint'} size={28} color='#F45656'/>
                    <Text style={styles.textButtonBiometry}>Biometria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAccess}>
                    <Text style={styles.textButtonAccess}>Acessar</Text>
                    <Icon name={'arrow-right'} size={28} color='white'/>
                </TouchableOpacity>
            </View>
            <Text>Faça login com sua rede social</Text>
            <View style={styles.buttonGrid}>
                <TouchableOpacity>
                    
                    <Text>Biometria</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Acessar</Text>
                </TouchableOpacity>
            </View>
            <Text>Criar Conta</Text>
        </ImageBackground>
    )
}

export default Home;