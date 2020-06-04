import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid, Modal, Alert, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Estabelecimento from '../../models/Estabelecimento.js';
import EstablishmentController from '../../controllers/EstablishmentController';

import styles from './Style';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            establish: null,
            modalVisible: false,
            event: this.props.event,
        };
    }

    UNSAFE_componentWillMount()
    {
        if(!this.state.establish)
            return;
    }
/*
    changeName = (name) =>{
        let establish = this.state.establish;
        if(!establish)
            return;
       
        establish.nome = name;
        if(''.includes(this.state.establish.nome))
            this.setState({establish});
        else this.setState({establish});
    }
*/

    createEstablish = (item) =>{
        let file = new Estabelecimento;
        file.nome = item
        const insertId = EstablishmentController.addEstablishment(file);
        if(insertId==null || insertId == undefined){
            alert("Não foi possível inserir o lugar")
        }
/*
        createEstablish(this.state.establish).then(({result, message}) =>{
        ToastAndroid.show(message, ToastAndroid.SHORT);
        if(result){
            this.setState({establish: new Estabelecimento()});
            Keyboard.dismiss();
            if(this.state.event)
                this.state.event.emit('onCreateEstablishment');
            }
        });*/
    }

    /*  if(!this.state.establish)
            return <Text>Lugar Inválido</Text>*/
    render(){

        const{establish} = this.state;

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

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    //onRequestClose={()=>{Alert.alert("Modal has been closed.");}}
                >
                    <View style={styles.centeredViewModal}>
                        <View style={styles.modalView}>
                            <Text>Digite o local</Text>
                            <TextInput
                                style={{width:200, height:50, backgroundColor:"grey", marginTop:15, paddingLeft:10}}
                                placeholder="Digite o estabelecimento..."
                                onChangeText={(text) => {this.setState({establish: text})}}
                                value={establish} />
                            <TouchableOpacity 
                                style={{width:"80%", backgroundColor:"green", marginTop:20}}
                                onPress={ () => establish == null ? alert("O campo não pode está vazio") : this.createEstablish(establish)}> 
                                <Text style={{margin: 20, color:"white"}}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                    <View style={styles.addButton}>
                        <TouchableOpacity style={styles.addButtonArea} onPress={()=>{
                            this.setState({modalVisible: true});
                        }}>
                            <Text style={styles.addButtonText}><FontAwesome5 name={"plus"} style={styles.plusIcon}/></Text>
                        </TouchableOpacity>

                        
                    </View>
            </View>
        );
    }  
}