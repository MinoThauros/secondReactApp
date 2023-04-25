import GameScreen from '../screens/RunningGame';
export class ListedItem {
    id:number;
    value:number;
    constructor(key:number,value:number){
        this.id=key
        this.value=value
    }//in order to initialize the class without addressing proprieties
};

export type ListedItemProps={
    id:number;
    value:number;
}

export type GameScreenProps={
    userChoice:number;
    onGameOver:(numberOfRounds:number)=>void;
}

/**
setPastGuesses((rounds:ListedItem[])=>{}
 */
