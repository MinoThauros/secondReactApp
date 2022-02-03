import React, {useState, useRef, useEffect}   from "react";
import { StyleSheet, View,Text,Button, Alert, Image} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen=(props:any)=>{
    return(
        <View style={styles.screen}>
            <TitleText>The Game is over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                source={require('../assets/success.png')}
                style={styles.image}
                resizeMode="cover"
                />{/*fetching image; check docs for*/}
            </View>
            
            
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onRestart}/>
        </View>

        
    )
};
//GameOverScreen expects these values when it is called; much like a function
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%', //100% of the parent component
        height:'100%',
    },
    imageContainer:{
        borderRadius:200,
        borderWidth:3,
        borderColor:'black',
        width:300,
        height:300,
        overflow:'hidden',

    }
});

export default GameOverScreen;

