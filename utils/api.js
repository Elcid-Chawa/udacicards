import AsyncStorage from "@react-native-async-storage/async-storage";
import { receiveDecks } from "../actions";
import decks from "../reducers";
import { _getDecks } from "./_DATA";

export const STORAGE_KEY = 'UdaciCards:key'

export function initDeck() {
    return Promise.all(
        [
            _getDecks(),
        ]
    ).then(([decks]) => ({
        decks
    })).then(() => AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks)) )
}

export function getDecks(){
    
}

export function getDeck(){}
export function saveDeckTitle(){}
export function addCardToDeck(){}