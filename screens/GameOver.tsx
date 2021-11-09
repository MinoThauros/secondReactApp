import React, {useState, useRef, useEffect}   from "react";
import { StyleSheet, View,Text,Button, Alert} from "react-native";

const GameOverScreen=(props:any)=>{
    return(
        <View style={styles.screen}>
            <Text>The Game is over</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.onRestart}/>
        </View>

        
    )
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default GameOverScreen;

