import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/RunningGame';

export default function App() {
  const [userNumber, setuserNumber] = useState();

  const startGameHandler=(selectedNumber:any)=>{
    setuserNumber(selectedNumber); 
  };

  let content=<StartGameScreen onStartGame={startGameHandler} />;
  //well pass the function to the component using props; the function will be triggered from the component
  // this will trigger a state change here; in this case, it will become the chosen number

  if (userNumber){
    content=<GameScreen userChoice={userNumber}/>
  };
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

