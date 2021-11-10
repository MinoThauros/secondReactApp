import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Couleur from '../constants/colors'

//pass the title of the header later on
const Header= (props:any)=>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:Couleur.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color:'black',
        fontSize:18,
        fontFamily:'open-sans-bold'
    }
})
export default Header