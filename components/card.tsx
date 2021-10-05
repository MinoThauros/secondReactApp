import React from "react";
import { View,StyleSheet } from "react-native";

//props.children allows us to wrap it around any other component
const Card=(props:any)=>{
    return(
        <View style={{...styles.inputContainer_card, ...props.styles}}>{props.children}</View>
    )//spread operator retrieves all key value pairs
};

const styles=StyleSheet.create({
    inputContainer_card:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'black',//shadow is iOs specific
        shadowOffset:{width:0, height:2},
        shadowRadius:10,
        shadowOpacity:0.26,
        backgroundColor:'white',
        elevation:10,//elevations is the default android card; less control but easier to setup
        padding:20,
        borderRadius:10,
    }
});

export default Card;