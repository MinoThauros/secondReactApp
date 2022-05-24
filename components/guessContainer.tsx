import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import Couleur from '../constants/colors';

const GuessContainer=(props:any)=>{
    return(
        <View style={styles.container}>
            <Text>Guess #{props.id} was {props.title}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:colors.accent,
        padding:10,
        width:300,
        margin:10

    }
});

export default GuessContainer