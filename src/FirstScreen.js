import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cardcomponent from './Cardcomponent';



export default function FirstScreen() {
   

  
    const getCurrentDate = () => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let today = new Date();
        let date = today.getDate();
        let month = months[today.getMonth()];
        let year = today.getFullYear();
        let day = weekdays[today.getDay()];

        return `${day}, ${month} ${date} ${year}`;
    };

    return (
        <ScrollView>
        <View style={styles.mainComponent}>
            
            <View style={styles.topContainer}>
                <Text style={styles.date}>{getCurrentDate()}</Text>
                <Text style={styles.greeting}>Hello ! Ahmed</Text>
                <Text style={styles.subText}>Have a nice day</Text>

            </View>
            <View>


                <Cardcomponent />
               
            </View>

          
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainComponent: {
        // backgroundColor:"red",
        flex: 1,

    },
    topContainer: {
        backgroundColor: "#F6F5F5",
        padding:10,
        
        // paddingLeft:,
        // flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },
    greeting: {
        fontFamily: "Arial",
        color: "black",
        fontSize: 22,
        fontWeight: "bold"
    },
    date: {
        color: "black",
        fontSize: 12,
        sfontFamily: 'Roboto-Regular',

    },
    subText: {
        fontSize: 12,

    }


})