import AsyncStorage from "@react-native-async-storage/async-storage";

import { _getDecks, _initDeck } from "./_DATA";



export function initDeck() {
    _initDeck()
}

export function getDecks(){
    return _getDecks()
}

export function addNewDeck({title, key}){
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [key]: {
            title: title,
            questions: []
        }
    }))
}

export function getDeck(){}
export function saveDeckTitle(){}
export function addCardToDeck({ question, answer, key}){
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [key]: {
            
        }
    }))
}