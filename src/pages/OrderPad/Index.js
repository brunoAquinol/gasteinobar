import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, CheckBox, TextInput, FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/Entypo';

import logoImg from '../../assets/splash.png'

import styles from './Style';


export default function OrderPad(){

    const navigation = useNavigation();

    function navigateToAddOrder(){
        navigation.navigate('AddOrder');
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={logoImg} style={{height:60, width:60}}/>
                <Text>HEADER AREA</Text>
                </View>
                <Text>:</Text>
            </View>
            <View style={styles.padText}>
                <View>
                    <Text>Dividir</Text>
                    <CheckBox/>
                </View>

                <View style={styles.divisionView}>
                    <Text>Divisão por </Text>
                    <TextInput style={styles.textInput} keyboardType='numeric'/>
                </View>
            </View>
            <Text style={styles.pedidoTxt}>Pedido</Text>

            <ScrollView>
                <View style={styles.order}>
                    <CheckBox style={styles.orderCheck} />
                    <View style={styles.orderTexts}>
                        <View style={styles.dotsArea} >
                            <Text style={styles.orderTitle}>Cerveja Brahma</Text>
                            <TouchableOpacity>
                                <Icon name="dots-three-vertical" size={20}></Icon>
                            </TouchableOpacity>
                        </View>
                        <Text>Valor Unitário: R$5,00</Text>
                        <View style={styles.qtdView} >
                            <Text style={styles.qtdTxt}>Qtd.:</Text>
                            <NumericInput onChange={() =>{}} />
                        </View>
                        <Text style={styles.subTotal}>Subtotal: R$5,00</Text>
                    </View>
                </View>
            
            </ScrollView>    
            <View style={styles.bottomEv}>
                
                    <View style={styles.parcial}>
                        <Text style={styles.parcialTitle} > Valor Parcial</Text>
                        <View style={styles.parcialTxtVl} >
                            <Text >Cover artístico:</Text>
                            <Text >R$ 20,00</Text>
                        </View>
                        <View style={styles.parcialTxtVl}>
                            <Text >% Garçom:</Text>
                            <Text >R$ 15,00</Text>
                        </View>
                        <View style={styles.parcialTxtVl}>
                            <Text >Total sem divisão:</Text>
                            <Text >R$ 150,00</Text>
                        </View>
                        <View style={styles.parcialTxtVl}>
                            <Text style={styles.parcialPrice} >Total com divisão:</Text>
                            <Text style={styles.parcialPrice}>R$ 50,00</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.addButton} onPress={navigateToAddOrder}>
                        <Text style={styles.addButtonTxt}>+</Text>
                    </TouchableOpacity>
                
            </View>
            <TouchableOpacity style={styles.endBill}>
                    <Text style={styles.endBillTxt}>Finalizar Conta</Text>
                </TouchableOpacity>

        </View>
    );
}