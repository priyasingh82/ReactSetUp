import React from 'react';
import {Text,View,StyleSheet} from 'react-native';



const Card = (props) => {
 return (
     <View style= {styles.cardStyle}>
      {props.children}
     </View>
 )
};

const styles = StyleSheet.create({
    cardStyle: {
        padding:15,
        borderWidth :1,
        borderRadius:2,
        borderColor: '#ddd',
        borderBottemWidth:0,
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
        },
})

export default Card;