import React, { useState, useEffect } from 'react';
import { ImageBackground, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TouchID from 'react-native-touch-id';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, us } from '@react-native-community/google-signin';

import styles from './styles';
import imageBackground from '../../assets/images/background-home.png';
import imageLogo from '../../assets/images/logo.png';



GoogleSignin.configure({
    webClientId: '728526210462-q7jisje6bi2lf5fqqc9r1mr7cfq5a6ej.apps.googleusercontent.com',
});

const Home = () => {
    const [supported, setSupported] = useState(false);

    async function onGoogleButtonPress() {
        // Get the users ID token
        const userLogin = await GoogleSignin.signIn();
        
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(userLogin.idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    useEffect(() =>{
        TouchID.isSupported()
            .then(()=> {
                setSupported(true);
            })  
            .catch((error) =>{
                setSupported(false);
            })
    }, []);

    function handleLogin() {
        const configTouchID = {
            title: 'TaskRun',
            imageColor: '#485E80', 
            imageErrorColor: '#D96760',
            sensorDescription: 'Leitor de biometria', 
            sensorErrorDescription: 'Digital não reconhecida.', 
            cancelText: 'Desistir'
        }
        TouchID.authenticate('Falta pouco pra você começar a gerenciar suas tarefas!', configTouchID)
        .then(success => {
          alert('Authenticated Successfully');
        })
        .catch(error => {
          alert('Authentication Failed');
        });
    }
    return (
        <ImageBackground source={imageBackground} style={styles.imageBackground}>
            <Image source={imageLogo} style={styles.imageLogo}/>
            <Text style={styles.welcome}>Bem vindo ao</Text>
            <Text style={styles.title}>TaskRun</Text>
            <Text style={[styles.description, {maxWidth: 220}]}>O “ToDo” mais simples, interarativo e fácil de manusear. Não postergue, realize.</Text>
            <Text style={styles.description}>Bora lá!</Text>
            <View style={styles.buttonGrid}>
                <TouchableOpacity style={styles.buttonBiometry} onPress={handleLogin}>
                    <Icon name={'fingerprint'} size={28} color='#F45656'/>
                    <Text style={styles.textButtonBiometry}>Biometria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAccess} onPress={()=> alert(GoogleSignin.getCurrentUser().user.email)}>
                    <Text style={styles.textButtonAccess}>Acessar</Text>
                    <Icon name={'arrow-right'} size={28} color='white'/>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textSocialLogin}>Faça login com sua rede social</Text>
                <View style={styles.buttonGrid}>
                    <TouchableOpacity style={styles.buttonSocial} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
                        <Icon name={'google'} size={28} color="#41190C" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSocial}>
                        <Icon name={'facebook-f'} size={28} color="#41190C" />
                    </TouchableOpacity>
                </View>
                <Text>Criar Conta</Text>
            </View>
        </ImageBackground>
    )
}

export default Home;