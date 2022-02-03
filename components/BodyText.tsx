import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText= (props:any)=>{
    return (
        <Text style={{...props.styles,...styles.body}}>{props.children}</Text>
    )
};

const styles=StyleSheet.create({
    body:{
        fontFamily:'open-sans-bold'
    }
});

export default BodyText;
//technique #1 of passing fonts: create light wrapper