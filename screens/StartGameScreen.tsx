import React, {useState} from "react";
import { View, Text , StyleSheet,TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from '../components/card';
import Colors from '../constants/colors';
import Input from "../components/input";

const StartGameScreen=(props:any)=>{

    const [enteredVal, setEnteredVal]=useState(''as String);
    const numberInputHandler=(inputText:String)=>{
        setEnteredVal(inputText.replace(/[^0-9]/g,''));
        //anything that IS NOT 0-9, globally so the enteire text; replace with empty string
        //TouchableWithoutFeedback is used to shut down the keyboard by touching outside of it
    };


    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
             <View style={styles.screen}>
            <Text style={styles.title}> Start a new game</Text>
            <Card style={styles.inputContainer_card}>
                <Text>Select a number</Text>
                <Input 
                    style={styles.input} 
                    blurOnSubmit  
                    autoCapitalize='none' 
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredVal}
                />
                <View style={styles.buttonStack}>
                    <View style={styles.button} >
                        <Button title="Reset" onPress={()=>{}} color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={()=>{}} color={Colors.primary} />
                    </View>
                    
                </View>
            </Card>
                
        </View>
        </TouchableWithoutFeedback>
       
    )
};

const styles=StyleSheet.create({
    screen:{
        flex:1,//takes the intire space
        padding:10,
        alignItems:'center'//centerd around the cross axis; horizonta axis here
    },
    buttonStack:{
        flexDirection:'row',
        width:'100%',//take all the space of the parent component 
        justifyContent:'space-between',//sits on the left and right of the row; takes all space
        paddingHorizontal:15
    },
    inputContainer_card:{
        width:300,
        maxWidth:'80%',

    },
    title:{
        fontSize:20,
        marginVertical:10,//replaces marginBottom and marginTop
    },
    button:{
        width:"40%"//ca use either pixel numbers or %
    },

    input:{
        width:50,
        textAlign:'center'
    }
});

export default StartGameScreen
