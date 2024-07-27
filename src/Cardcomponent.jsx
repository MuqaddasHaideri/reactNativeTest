import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import image1 from '../images/economyride.png';
import image2 from '../images/confortride.png';
import image3 from '../images/luxuryride.png';
import image4 from '../images/delivery.png';
import image5 from '../images/food.png';
import image6 from '../images/supermarket.png';
import image7 from '../images/burger.png';
import image8 from '../images/specialofferImage.jpeg';
import { useNavigation } from '@react-navigation/native';



const cardData = [
    { id: '1', name: "Economy ride", url: image1 },
    { id: '2', name: "Comfort Ride", url: image2 },
    { id: '3', name: "Luxury Ride", url: image3 },
    { id: '4', name: "Delivery", url: image4 },
    { id: '5', name: "Food", url: image5 },
    { id: '6', name: "Super Mart", url: image6 }
];



const CardComponent = () => {
        const navigation = useNavigation();
    
        const navigateToSecondScreen = () => {
            navigation.navigate("SecondScreen");
        }
    // const navigation = useNavigation();
    return (
       <View>
            <View style={styles.cardsContainer}>
                {cardData.map(item => (
                    <View key={item.id} style={styles.itemContainer}>
                        <Image source={item.url} style={styles.image} />
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.subContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>Get Special discount</Text>
                    <Text style={styles.text2}>Upto 60%</Text>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={navigateToSecondScreen}>
                        <Text style={styles.btnText}>Order Now</Text>
                    </TouchableOpacity>
                </View>
                <Image source={image7} style={styles.foodImage} />
            </View>
            <Text style={styles.text3}>Special Offer</Text>
            <View style={styles.specialOfferContainer}>
                <Image source={image8} style={styles.cardinalChipsimg} />
               
            </View>
            <View style={styles.bottomText}>
            <Text style={styles.btText1}>Cardinal Tool</Text>
            <TouchableOpacity style={styles.rate}>
            <Text style={styles.btText2}>43</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default CardComponent;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    itemContainer: {
        backgroundColor: "#F7F7F7",
        padding: 8,
        marginBottom: 8,
        borderRadius: 20,
        width: '30%', 
        height: 91,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowColor: "gray",
        shadowRadius: 4,
        elevation: 3,
        margin: 5,
    },
    itemText: {
        fontSize: 14,
        color: 'black',
        marginBottom: 10,
        alignSelf: "center"
    },
    image: {
        width: '100%',  
        height: 50,
        resizeMode: 'contain'
    },
    subContainer: {
        flexDirection: "row",
        width: '100%',
        backgroundColor: "#000000",
        borderRadius: 30,
        padding: 20,
        marginVertical: 10,
        position: 'relative',
    },
    foodImage: {
        width: 184,
        height: 149,
        borderRadius: 20,
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    text1: {
        fontSize: 12,
        color: "white",
        marginBottom: 8,
    },
    text2: {
        fontSize: 24,
        color: "white",
        marginBottom: 12,
    },
    textContainer: {
        flexDirection: "column",
        padding: 12,
        flex: 1,
    },
    btnText: {
        height: 32,
        width: 97,
        fontSize: 12,
        color: "black",
        fontWeight: "bold",
        textAlign: 'center',
        lineHeight: 32,
    },
    btn: {
        backgroundColor: "white",
        height: 32,
        width: 97,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    text3: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        padding: 10,
    },
    cardinalChipsimg: {
        width: 354,
        height: 183,
        

    },
    specialOfferContainer:{
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:10,

    },
    btText1:{
color:"black",
fontWeight:"bold",
fontSize:16,

paddingLeft:22,

    },
    btText2:{
        color:"black",
        margin:6,
        borderRadius:50,
        height:27,
        width:28,
        backgroundColor: "#F7F7F7",
       // padding:6,
    
    },
    bottomText:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    rate:{
        paddingRight:16,
    }

});
