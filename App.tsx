import React, {useState} from 'react';
import { StyleSheet, ImageBackground,SafeAreaView } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/RunningGame';
import GameOverScreen from './screens/GameOver';
import * as Font from 'expo-font';//allows to Load fonts
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });}//Need to load fonts before render so call on them before anything else

export default function App() {
  const [userNumber, setuserNumber] = useState<number | null>();
  const [GuessRounds, setGuessRounds] = useState(0);// if its >0, game is over
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    //linking state to Apploading component so we have a signal on when async elements
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={(err)=>console.log(err)}/>};
    //startAsync contains the function we want to start when the component is rendered; fetchFonts is expected to be a function that returns a promise
    //See API docs for more info
    //pass function as prop to startAsync; the componet will send a signal when load is done
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

  //for testing purposes only
  //content=<GameOverScreen roundsNumber={4} userNumber={4} onRestart={configureNewGameHandler}/>;
  //for testing purposes only

  
  if (userNumber && GuessRounds<=0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if (GuessRounds >0){
    content=<GameOverScreen onRestart={configureNewGameHandler} userNumber={userNumber} roundsNumber={GuessRounds}/>;
    //try to rewrite function using declaratinve inputs for the function (object structure vs dynamically typed prop)
  }
  return (
    <LinearGradient style={styles.screen} colors={['#4e0329','#ddb52f']}>
      <ImageBackground 
        source={require('./assets/background_dices.png')}
        resizeMode="cover" 
        style={styles.screen}
        //demands that we attribute a width propriety to background image
        //inheritance of propriety isn't the same in react native
        imageStyle={styles.backGroundImage}
        //check react native source code on how stle and imageStyle works
        >
      <Header title="Guess a number"/>
      {content}        
      </ImageBackground>

    </LinearGradient>
  );
}
//we constantly change the value of content
const styles = StyleSheet.create({
  screen:{
    flex:1,//flex:1 means that the component will take all the available space; check doc
  },
  backGroundImage:{
    opacity:0.15,
    //85% transparency
  }
});

