import React from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import styles from './Style';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text style={styles.menuText} > GASTEI NO BAR </Text>
            </View>
            <View style={styles.centerTextArea}>
                <Text style={styles.centerText}>
                    Comece uma nova comanda apertando o botão "+" abaixo
                </Text>
            </View>
            <View style={styles.addButton}>
                <TouchableOpacity style={styles.addButtonArea}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}