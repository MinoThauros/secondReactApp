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
               //fadeDuration={300}
               source={require('../assets/success.png')}
               //source={{uri:'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}
               style={styles.image}
                resizeMode="cover"
                />{/*fetching image; check docs for
                note: 
                    1-when image is local, React can automatically infer the image's dimensions 
                    and will use these dimensions by default; hence why the need for width and height
                    on the image to overwrite it
                    2-when image is remote, React cannot automatically infer the image's dimensions so
                    we need to specify the width and height of the image
                */}
                
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
        height:'100%',//same heigh as width
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

