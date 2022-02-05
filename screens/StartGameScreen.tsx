import React, {useState} from "react";
import { 
    View,
    Text ,
    StyleSheet,
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
 } from "react-native";
import Card from '../components/card';
import Colors from '../constants/colors';
import Input from "../components/input";
import NumberContainer from "../components/numberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen=(props:any)=>{

    const [enteredVal, setEnteredVal]=useState('');
    const [confimed,setConfirmed]=useState(false);
    const [selectedNumber, setSelectedNumber]=useState({} as Number);

    const numberInputHandler=(inputText:String)=>{
        setEnteredVal(inputText.replace(/[^0-9]/g,''));
        //anything that IS NOT 0-9, globally so the enteire text; replace with empty string
        //TouchableWithoutFeedback is used to shut down the keyboard by touching outside of it
    };
    const resetHandler=()=>{
        setEnteredVal('');
        setConfirmed(false);
    };

    const confirmInputHandler=()=>{
        const chosenNumber=parseInt(enteredVal);
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99){
            Alert.alert('Invalid number',
            'Number has to be between 0-99',
            [{
                text:'Okay',
                style:'destructive',
                onPress:resetHandler
            }]);
            return;
        };
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredVal));//set by the onChange() function on the input
        setEnteredVal('');
        Keyboard.dismiss();

        
    };
    let confirmedOutput:JSX.Element | undefined;


    if(confimed){
        confirmedOutput=
        <Card styles={styles.numberBox}>
            <View>
                <BodyText>You selected</BodyText>
                <NumberContainer>
                    {selectedNumber} 
                </NumberContainer>
            </View>
            <View>
                <MainButton onPress={()=>props.onStartGame(selectedNumber)} >
                    START GAME
                </MainButton>
            </View>
        </Card>

            
       
        
    };//a change of state will cause a rerender of the whole page,
    //  - which will trigger the function again



    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>
                {/*<Text style={styles.title}> Start a new game</Text>*/}
                <TitleText style={styles.title}> Start a new game</TitleText>
                <Card style={styles.inputContainer_card}>
                    <Text style={styles.text }>Select a number</Text>
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
                            <Button title="Reset" onPress={resetHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                        </View>
                        
                    </View>
                </Card>
                    {confirmedOutput}
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
        fontFamily:'open-sans-bold'
    },
    button:{
        width:"40%"//ca use either pixel numbers or %
    },

    input:{
        width:50,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop:20
    },
    numberBox:{
        marginTop:20,
        width:170,
        maxWidth:'50%',
        alignItems:'center'

    },
    text:{
        fontFamily:'open-sans',
    }
});

export default StartGameScreen
