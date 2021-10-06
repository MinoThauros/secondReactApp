import React from "react";
import { View, Text , StyleSheet,TextInput, Button } from "react-native";
import Card from '../components/card';

const StartGameScreen=(props:any)=>{
    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Start a new game</Text>
            <Card style={styles.inputContainer_card}>
                <Text>Select a number</Text>
                <TextInput />
                <View style={styles.buttonStack}>
                    <View style={styles.button} >
                        <Button title="Reset" onPress={()=>{}} color="#c717fc" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={()=>{}} color="#f7287b" />
                    </View>
                    
                </View>
            </Card>
                
        </View>
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
    }
});

export default StartGameScreen
