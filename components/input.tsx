import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input =(props:any)=>{
    return <TextInput {...props} style={{...styles.input,...props.style}}/>
};//so we can also inherit aditonal styling 
//we want to pass more than styles to the component; spread operators returns all the object sent from the parent

const styles=StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10
    }
});

export default Input;