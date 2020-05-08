import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    
    text:{
        fontSize:20,
        fontWeight:'bold'
    },

    menu:{
        backgroundColor:'grey',
        height: 40,
        marginBottom: 10
    },

    content:{
        /*flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'*/
    },

    contentPrice:{
        flexDirection: 'row',
        alignItems:'center'
    },

    pickerStyle:{
        borderLeftWidth:1,
        borderColor: 'grey',
    },

    addBtn:{
        height: 40,
        width:200,
        alignSelf:'flex-end',
        justifyContent: 'center',
        alignItems:'flex-end',
        borderRadius:30,
        marginTop:10,
        marginBottom: 35,
        
    },

    priceInput:{
        height: 30,
        width:50,
        fontSize:25,
        paddingLeft:5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },

    addBtnTex:{
        color:'blue',
    },

    createBtn:{
        height:40,
        backgroundColor:'#A0660E',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:30,
        marginTop: 50
    },

    createBtnTxt:{
        color:'white',
        fontWeight:'bold'
    }
});