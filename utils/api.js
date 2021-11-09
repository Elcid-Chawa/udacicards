import AsyncStorage from "@react-native-async-storage/async-storage";

import { _getDecks, STORAGE_KEY, defaultDeck } from "./_DATA";

export function initializeDecks(){
    return defaultDeck();
}

export function getDecks(){
    return AsyncStorage.getItem(STORAGE_KEY)
}

export function saveDeckTitle(key){
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [key]: {
            title: key,
            questions: []
        }
    }))
}

export function removeDeck(key){
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]

            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        } )
}

export function addCardToDeck(title, card ){
    getDecks().then((value) => {
        const deck = JSON.parse(value);
        return AsyncStorage.mergeItem( STORAGE_KEY, JSON.stringify({
            [title]: {
                ...deck[title],
                questions: deck[title].questions.concat(card)
            }
        }))
    })      
}