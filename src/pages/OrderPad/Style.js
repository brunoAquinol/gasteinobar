import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: Constants.statusBarHeight + 20,
    },

    padText:{
        flexDirection:'row',
        paddingHorizontal: 15,
        paddingTop: 10,
        justifyContent: 'space-between'
    
    },

    pedidoTxt:{
        color:'gray',
        paddingBottom: 10,
        textAlign:'center'
    },

    divisionView:{
        flexDirection: 'row',
        alignItems:'center',
    },

    textInput:{
        width:40,
        borderEndColor:'gray',
        borderBottomWidth: 1,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },

    order:{
        flexDirection:'row',
        alignItems: 'center',
        padding: 15,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom:16,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation:8,
    },

    orderCheck:{
        marginRight:20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    orderTexts:{
        flex:3,
        flexDirection: 'column',
        fontSize: 50,
        borderLeftColor: '#e2e2E2',
        borderLeftWidth: 1,
        paddingLeft: 20
    },

    orderTitle:{
        color:'#A0660E',
        fontSize: 25,
        fontWeight: 'bold'
    },

    dotsArea:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    qtdView:{
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 10,
        marginTop: 5
    },

    qtdTxt:{
        marginRight: 10
    },

    subTotal:{
        justifyContent: 'flex-end',
        alignSelf:'flex-end',
        fontSize: 17,
        fontWeight:'bold'
    },
   
    bottomEv:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center',
        paddingTop: 10,
    },

    parcial:{
        padding: 15,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom:16,
        width: 280
    },

    parcialTitle:{
        color: 'gray',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },

    parcialTxtVl:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    parcialPrice:{
        fontSize: 20,
        fontWeight:'bold'
    },

    endBill:{
        backgroundColor: 'limegreen',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        padding: 10
    },

    endBillTxt:{
        color: '#fff',
        fontWeight: 'bold'
    },

    addButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: 20,
        height: 60,
        width: 60,
        borderRadius:100,
        backgroundColor:'#A0660E'
    },

    addButtonTxt:{
        color:'#fff',
        fontSize: 30,
        fontWeight:'bold'
    }

});