import React, {useState, useRef, useEffect}   from "react";
import { StyleSheet, View,Text,Button, Alert} from "react-native";
import Colors from '../constants/colors';
import NumberContainer from "../components/numberContainer";
import Card from "../components/card";
import defaultStyles from "../constants/default-styles";
import {ListedItem} from "../interfaces/primitives"

const generateRandomBetween=(min:number, max:number, exclude:number):number=>{
    /**
     * function to create a random number between min and max; recurcive implementation
     */
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum=Math.floor((Math.random() * (max-min))+min);
    if (rndNum===exclude){
        return generateRandomBetween(min,max, exclude);
    }else{
        return rndNum;
    }
};

const GameScreen=(props:any)=>{
    //would love some structure on the incoming props which are fed to the template
    const [currentNumber, setCurrentNumber]=useState(generateRandomBetween(1,100, props.userChoice));
    const [Rounds, setRounds] = useState(0)

    //we need an array where all the past guesses are kept
    const [pastGuesses,setPastGuesses]=useState([] as ListedItem[]);
    const addNewGuess=()=>{
        setPastGuesses((rounds:ListedItem[])=>{
            const newElement=new ListedItem(currentNumber,currentNumber)
            return [newElement,...rounds]});
    };


    //reseting values on every rerender
    const currentLow=useRef(1);
    const currentHigh=useRef(100);

    const {userChoice, onGameOver}=props;//object destructuring
//had to destructure the props object because keeping them linked to props changes their value when the parent component changes
//it will be marked as changed on rerendering of parent component
//we create a new instance; specific to this context
    useEffect(()=>{
        if (currentNumber===props.userChoice){
            onGameOver(Rounds);//only executed if currentNumber===userChoice
        };
        
    }, [currentNumber, userChoice, onGameOver]);
    //function will only triggered if render cycle happened AND a change occured on one of the (AFTER render cycle)
    //-variables in the dependency array
    
    //the above function using useEffect is the function which polls if game should be ended
    //conditionally triggered if something changes in the array
    

    const nextGuessHandler=(direction:string)=>{
        //validate hint given by user before applying it; compare entered value to generated value
        //if entered value is effectively in the direction of the computer's val, then let direction be the variable applied to tests
        //entered val is props.userChoice; computer guess is currentNumber
        if ((direction==='lower' && currentNumber < props.userChoice)||(direction==='greater' && currentNumber > props.userChoice)){
            //DIRECTLY ennunciate undesirable scenarios
            Alert.alert('Don\'t lie',
            'You know that this is wrong...',
            [{
                text:'Sorry',
                style:'cancel',
            }]);
            return;//alert is an object with a few special properties
        };
        if (direction==='lower'){
            currentHigh.current=currentNumber;//saved outside of component; wont trigger a re-render
        }
        else{
            currentLow.current=currentNumber;
        }
        const nextNumber= generateRandomBetween(currentLow.current, currentHigh.current, currentNumber);
        setCurrentNumber(nextNumber);//passed as the next currentNumber; button rettigers the nextGuessHandler
        setRounds(curRounds=>curRounds+1);
        addNewGuess();
    };

    return(
        <View style={styles.screen} >
            <Text style={defaultStyles.title}>Opponent's guess</Text>
            <NumberContainer>{currentNumber}</NumberContainer>
            <Card>
                <View style={styles.buttonStack}>
                    <Button title="Lower !!" onPress={nextGuessHandler.bind(this,'lower')} />
                    <Button title="Higher !!" onPress={()=>{nextGuessHandler('greater')}} />
                </View>
            </Card>
            {pastGuesses.map((guess)=>{return(
                    <Text key={guess.id} >{guess.value}</Text>
                )})}
        </View>
    //bind allows us to recreate the body of a function even outside of a context and pass variables to it
    //equivalent to calling the function; 
    )
    };



const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',

    },
    buttonStack:{
        flexDirection:'row',
        width:300,//take all the space of the parent component 
        justifyContent:'space-around',//sits on the left and right of the row; takes all space
        marginTop:20,
        maxWidth:'80%',


    },
});
export default GameScreen;

//implement functionality where we offer a recap, showing all the wrong guesses as well