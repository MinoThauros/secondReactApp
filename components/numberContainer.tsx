import React  from "react";
import { StyleSheet, View,Text } from "react-native";
import Colors from '../constants/colors'

const NumberContainer=(props:any)=>{
    return(
    <View>
        <Text>{props.children}</Text>
    </View>
    );
    
};

const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Colors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10
    }
})