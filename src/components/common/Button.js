import React from 'react';
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native';


const Button = ({onPress,children}) => {
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={styles.buttonStyle}>
            <Text style={styles.textStyle1}>{children}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    textStyle1:{
        alignItems:'center',
        padding:120,
        justifyContent:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
    },
    buttonStyle:{
       backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5

    }
})
export default Button;