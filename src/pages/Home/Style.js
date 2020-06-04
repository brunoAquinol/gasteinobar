import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor:'white'
    },

    menu:{
        backgroundColor:'green',
        height: 30
    },

    menuText:{
        color:'white',
        fontWeight: 'bold',
    },

    centerTextArea:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    centerText:{
        fontSize: 40,
        textAlign:'center',
        color:'#9C9C9C'
    },

    centeredViewModal:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        marginTop: 22
    },

    modalView:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    addButton:{
        alignItems: 'flex-end',
        padding: 10,
        marginLeft: 20,
        marginBottom:20
    },

    addButtonArea:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        width: 65,
        borderRadius:100,
        backgroundColor:'#A0660E'
    },

    plusIcon:{
        fontSize: 15
    },

    addButtonText:{
        fontSize:30,
        color:'white'
    },
});