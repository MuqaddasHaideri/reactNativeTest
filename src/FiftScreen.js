import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import image from '../images/btnlogo.png';
import { useNavigation } from '@react-navigation/native';
import locationLogo from '../images/locationLogo.png';
import locationLogotwo from '../images/map.png';
import CopyImage from '../images/copy.png'
import image1 from '../images/economyride.png';
import visa from '../images/visa.png';
import masterCard from '../images/mastercard.png';
import wallet from '../images/wallet.png';
import dollar from '../images/dollar.png'
import { TextInput } from 'react-native-gesture-handler';

export default function FiftScreen() {
    const navigation = useNavigation();
    const [currentCard, setCurrentCard] = useState(1)

    const goBack = () => {
        navigation.goBack();
    };

    const paymentMethods = [
        { id: 1, heading: "**** **** **** 8970", description: "Expires: 12/26", image: visa },
        { id: 2, heading: "**** **** **** 8970", description: "Expires: 12/26", image: masterCard },
        { id: 3, heading: "My Wallet", description: "$349", image: wallet },
        { id: 4, heading: "Cash", description: "", image: dollar },
    ]
    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
                    <Text style={styles.goBackText}>Go Back</Text>
                </TouchableOpacity>

                <View style={styles.topRightButtonContainer}>
                    <TouchableOpacity style={styles.topRightButton}>
                        <Image source={image} style={styles.logoImg} />
                    </TouchableOpacity>
                </View>

                <View style={styles.locationContainer}>
                    <View style={styles.locationRow}>
                        <Image source={locationLogo} style={styles.locImg} />
                        <View style={styles.textWrapper}>
                            <Text style={styles.locText1}>Current location</Text>
                            <Text style={styles.locText2}>562/11-A</Text>
                        </View>
                    </View>

                    <View style={styles.locationRow}>
                        <Image source={locationLogotwo} style={styles.locImg} />
                        <View style={styles.textWrapper}>
                            <Text style={styles.locText1}>Current location</Text>
                            <Text style={styles.locText2}>562/11-A</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.SelectedRide}>
                    <View style={styles.imageWrapper}>
                        <Image source={image1} style={styles.carlogo} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.economyText}>Economy</Text>
                        <Text>Best, Economy rides</Text>
                    </View>
                    <Text style={styles.price}>$193.20</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <View style={styles.timeContainer}>
                        <TextInput style={styles.dateInput} placeholder='Date' />
                        <TextInput style={styles.timeInput} placeholder='Time' />
                    </View>
                    <View style={styles.promoInput}>
                        <TextInput placeholder='Enter PromoCode' />
                        <Image style={styles.copyImage} source={CopyImage} />
                    </View>
                </View>
                <View style={styles.paymentMethodContainer}>
                    <Text style={styles.selectPaymentText}>Select payment method</Text>
                    {paymentMethods.map((method) => (
                        <TouchableOpacity
                            onPress={() => setCurrentCard(method.id)}
                            style={currentCard == method.id ? styles.activeCard : styles.methodContainer}
                            key={method.id}>
                            <View>
                                <Image style={styles.paymentImage} source={method.image} />
                            </View>
                            <View>

                                <Text style={styles.paymentHeading} >{method.heading}</Text>
                                <Text style={styles.paymentDescription}>{method.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topRightButtonContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    topRightButton: {
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImg: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
    },
    goBackButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#EEEEEE',
        zIndex: 1,
    },
    goBackText: {
        fontSize: 16,
        color: 'black',
    },
    locationContainer: {
        marginTop: 90,
        flexDirection: 'column',
        paddingHorizontal: 30,

    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textWrapper: {
        marginLeft: 10,
        padding: 10,
    },
    locImg: {
        height: 18,
        width: 18,
    },
    locText1: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    locText2: {
        fontSize: 12,
        color: 'gray',
    },
    SelectedRide: {
        height: 66,
        width: 354,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: "#D8D7D7",
        alignSelf: "center",
        flexDirection: "row",
    },
    carlogo: {
        width: 48,
        height: 30,
        margin: 12,
    },
    textContainer: {
        padding: 7,
    },
    //  
    economyText: {
        fontSize: 14,
        color: "black",
        fontWeight: "bold",
        margin: 2,
    },
    price: {
        fontSize: 14,
        color: "black",
        fontWeight: "bold",
        paddingLeft: 50,
        paddingVertical: 18

    },
    inputsContainer: {
        // backgroundColor: "red",
        marginVertical: 12,
        paddingHorizontal: 24,

    },
    timeContainer: {
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dateInput: {
        width: "48%",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        borderColor: "#dddd",

    },
    timeInput: {
        width: "48%",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        borderColor: "#dddd",

    },
    promoInput: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        borderColor: "#dddd",
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    copyImage: {
        height: 24,
        width: 24
    },
    paymentMethodContainer: {
        paddingHorizontal: 24
    },
    activeCard: {
        borderWidth: 1,
        borderColor: "#404040",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        marginVertical: 5,
        flexDirection: "row",
        backgroundColor: "#EEEDE8",
        gap: 12
    },
    methodContainer: {
        borderWidth: 1,
        borderColor: "#CBCBCB",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        flexDirection: "row",
        backgroundColor: "#F8F8F6",
        gap: 12,
        marginVertical: 5
    },
    selectPaymentText: {
        marginVertical: 15,
        fontSize: 18,
        color: "#5A5A5A",
        fontWeight: "800"
    },
    paymentImage: {
        width: 45,
        height: 30,
        resizeMode: "contain",
    },
    paymentHeading: {
        color: '#5A5A5A',
        fontSize:16,
        fontStyle:"500"
    },
    paymentDescription: {
fontSize:14,
color:"500",
color:"#B8B8B8"
    }
});
