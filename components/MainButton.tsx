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