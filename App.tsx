import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/RunningGame';
import GameOverScreen from './screens/GameOver';
import * as Font from 'expo-font';//allows to Load fonts
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });}//Need to load fonts before render so call on them before anything else

export default function App() {
  const [userNumber, setuserNumber] = useState<any | null>();
  const [GuessRounds, setGuessRounds] = useState(0);// if its >0, game is over
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={(err)=>console.log(err)}/>};
    //startAsync contains the function we want to start when the component is rendered; fetchFonts is expected to be a function that returns a promise
    //See API docs for more info

  const gameOverHandler=(numberOfRounds:number)=>{
    setGuessRounds(numberOfRounds);

  };

  const configureNewGameHandler=()=>{
    setGuessRounds(0);
    setuserNumber(null);
  };

  const startGameHandler=(selectedNumber:any)=>{
    setuserNumber(selectedNumber); 
  };

  let content=<StartGameScreen onStartGame={startGameHandler} />;
  //well pass the function to the component using props; the function will be triggered from the component
  // this will trigger a state change here; in this case, it will become the chosen number

  if (userNumber && GuessRounds<=0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if (GuessRounds >0){
    content=<GameOverScreen onRestart={configureNewGameHandler} userNumber={userNumber} roundsNumber={GuessRounds}/>;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});

