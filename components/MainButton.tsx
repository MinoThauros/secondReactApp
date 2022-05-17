import React from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const MainButton= (props:any)=>{
    return (
        <TouchableOpacity onPress={props.onPress} style={{...styles.button,...props.style}}>
            <View>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
};
//adds touchable behavior to any wrapped item
//use props.children to be able to wrap around other components
//use style={{...props.styles,...styles.propriety}} to deconstruct set of key:value pairs


const styles=StyleSheet.create({
    button:{
        borderRadius:25,
        backgroundColor:colors.primary,
        paddingVertical:12,
        paddingHorizontal:30,
    },
    buttonText:{
        color:'white',
        fontFamily:'open-sans',
        fontSize:18

    }
}
);

export default MainButton;