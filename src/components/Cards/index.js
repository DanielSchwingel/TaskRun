import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

export default function Cards (props) {
    return (
        <View style={styles.container}>
            <View style={styles.cardsGrid}>
                <View style={styles.taskPending}>
                    <View style={styles.iconsGrid}>
                        <Icon name={'tasks'} size={25} color='#415EB6'/>
                        <Icon name={'search'} size={25} color='#415EB6'/>
                    </View>
                    <Text style={styles.titleCard}>Pendentes</Text>
                </View>
                <View style={styles.taskOverdue}>
                    <Text>adassadasd </Text>
                </View>
            </View>
            <View style={styles.cardsGrid}>
                <View style={styles.taskCanceled}>
                    <Text>adassadasd </Text>
                </View>
                <View style={styles.taskPerformed}>
                    <Text>adassadasd </Text>
                </View>
            </View>


        </View>
    )
}