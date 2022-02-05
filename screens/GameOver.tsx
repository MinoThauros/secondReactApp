import React, {useState, useRef, useEffect}   from "react";
import { StyleSheet, View,Text,Button, Alert, Image} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

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
            
            <View style={styles.resultContainer}>
                <BodyText styles={styles.resultText} >Number of rounds
                    <Text style={styles.highlight}> {props.roundsNumber} </Text>
                    to guess the number 
                    <Text style={styles.highlight}> {props.userNumber}</Text>
                </BodyText>
            </View>

            <Button title="New Game" onPress={props.onRestart}/>
            {/**
             * proprieties aren<t inherited from the parent component using view
             * view also uses a flexbox position system
             * It is however the case with <text> and its nested components
             * <text> also does not behave like a flexbox, it has its own position system where-
             *  -it wraps itself into a new line if not enough space is available 
             */}
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
    },
    highlight:{
        color:colors.primary,
        fontFamily:'open-sans-bold',   
    },
    resultText:{
        textAlign:'center'//a propriety spectific to <text>
    },
    resultContainer:{
        marginHorizontal:20,
        marginVertical:10,
    }
});

export default GameOverScreen;

