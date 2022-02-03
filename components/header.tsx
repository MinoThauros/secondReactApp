import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Couleur from '../constants/colors'
import TitleText from './TitleText';
//pass the title of the header later on
const Header= (props:any)=>{
    return (
        <View style={styles.header}>
            <TitleText>{props.title}</TitleText >
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

})
export default Header