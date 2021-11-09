import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

export const NOTIFICATION_KEY = 'UdaciCards:notifications'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    },
    item: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    heading: {
        fontSize: 24,
    },
    subHeading: {
        fontSize: 12,
        color: 'gray'
    },
    textBox: {
        borderRadius: 3,
        borderColor: 'black',
        
        marginTop: 10,
        marginBottom: 10

    }
})

export function clearLocalNotifcations(){
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createLocalNotifcations(){
    return {
        title: "Take A Quiz",
        body: "Do not for get to take a quiz today",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: "high",
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotifcations(){
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if(data === null){
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if(status === 'granted'){
                            Notifications.cancelScheduledNotificationAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleNotificationAsync(
                                createLocalNotifcations(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}