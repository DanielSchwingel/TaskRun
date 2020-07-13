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
                    <Text style={[styles.titleCard, {color:'#415EB6'}]}>Pendentes</Text>
                    <Text style={[styles.descriptionCard, {color:'#415EB6'}]}>22 tarefas</Text>
                </View>
                <View style={styles.taskOverdue}>
                    <View style={styles.iconsGrid}>
                        <Icon name={'tasks'} size={25} color='#FFB110'/>
                        <Icon name={'search'} size={25} color='#FFB110'/>
                    </View>
                    <Text style={[styles.titleCard, {color:'#FFB110'}]}>Atrasadas</Text>
                    <Text style={[styles.descriptionCard, {color:'#FFB110'}]}>22 tarefas</Text>
                </View>
            </View>
            <View style={styles.cardsGrid}>
                <View style={styles.taskCanceled}>
                    <View style={styles.iconsGrid}>
                        <Icon name={'tasks'} size={25} color='#AC4040'/>
                        <Icon name={'search'} size={25} color='#AC4040'/>
                    </View>
                    <Text style={[styles.titleCard, {color:'#AC4040'}]}>Canceladas</Text>
                    <Text style={[styles.descriptionCard, {color:'#AC4040'}]}>22 tarefas</Text>
                    </View>
                <View style={styles.taskPerformed}>
                    <View style={styles.iconsGrid}>
                        <Icon name={'tasks'} size={25} color='#23B0B0'/>
                        <Icon name={'search'} size={25} color='#23B0B0'/>
                    </View>
                    <Text style={[styles.titleCard, {color:'#23B0B0'}]}>Realizadas</Text>
                    <Text style={[styles.descriptionCard, {color:'#23B0B0'}]}>22 tarefas</Text>
                </View>
            </View>


        </View>
    )
}