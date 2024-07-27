import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import image from '../images/btnlogo.png';
import maplogo from '../images/Oval.png';
import { useNavigation } from '@react-navigation/native';
import clearlogo from '../images/Shape.png';
import image1 from '../images/Auto Layout Horizontal.png';
import locationLogo from '../images/locationLogo.png';
import { ScrollView } from 'react-native-gesture-handler';


export default function Forthscreen() {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
    const navigateToFiftScreen=()=>{
        navigation.navigate("FiftScreen");
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
                <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>


            <View style={styles.topRightButtonContainer}>
                <TouchableOpacity style={styles.topRightButton}>
                    <Image source={image} style={styles.logoImg} />
                </TouchableOpacity>
            </View>


            <View style={styles.textFieldsContainer}>
                <TextInput
                    style={styles.textField}
                    defaultValue="562/11-A"
                    placeholder="Address"
                    placeholderTextColor="gray"
                />
                <View style={styles.textFieldContainer}>
                    <TextInput
                        style={styles.textFieldWithIcon}
                        defaultValue="Third wave"
                        placeholder="Location"
                        placeholderTextColor="gray"
                    />
                    <Image source={clearlogo} style={[styles.textFieldIcon, styles.clearIcon]} />
                    <Image source={maplogo} style={[styles.textFieldIcon, styles.mapIcon]} />
                </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.laterbtn} onPress={navigateToFiftScreen}> 
                        <Image source={image1} style={styles.logobtn} />

                        <Text style={styles.laterText}>Later</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ContentContainer}>
                    <Text style={styles.contentheader}>
                        Popular locations
                    </Text>
                    <ScrollView>
                    <View style={styles.listContent}>
                        <View style={styles.logoWrapper}>
                            <Image source={locationLogo} style={styles.locationLogo} />
                        </View>
                        <View style={styles.textWrapper}>
                        <Text style={styles.text1}>
                        Third Wave Coffee
                        </Text >
                        <Text style={styles.text2}>lorem epsum lorem epsum</Text>
                        </View>
                    </View>
                    <View style={styles.listContent}>
                        <View style={styles.logoWrapper}>
                            <Image source={locationLogo} style={styles.locationLogo} />
                        </View>
                        <View style={styles.textWrapper}>
                        <Text style={styles.text1}>
                        Third Wave Coffee
                        </Text >
                        <Text style={styles.text2}>lorem epsum lorem epsum</Text>
                        </View>
                    </View>
                    <View style={styles.listContent}>
                        <View style={styles.logoWrapper}>
                            <Image source={locationLogo} style={styles.locationLogo} />
                        </View>
                        <View style={styles.textWrapper}>
                        <Text style={styles.text1}>
                        Third Wave Coffee
                        </Text >
                        <Text style={styles.text2}>lorem epsum lorem epsum</Text>
                        </View>
                    </View>
                    <View style={styles.listContent}>
                        <View style={styles.logoWrapper}>
                            <Image source={locationLogo} style={styles.locationLogo} />
                        </View>
                        <View style={styles.textWrapper}>
                        <Text style={styles.text1}>
                        Third Wave Coffee
                        </Text >
                        <Text style={styles.text2}>lorem epsum lorem epsum</Text>
                        </View>
                    </View>
                    <View style={styles.listContent}>
                        <View style={styles.logoWrapper}>
                            <Image source={locationLogo} style={styles.locationLogo} />
                        </View>
                        <View style={styles.textWrapper}>
                        <Text style={styles.text1}>
                        Third Wave Coffee
                        </Text >
                        <Text>lorem epsum lorem epsum</Text>
                        </View>
                    </View>
                    </ScrollView>
                </View>
            </View>
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
    textFieldsContainer: {
        marginTop: 80,
        paddingHorizontal: 10,
        justifyContent: "center",


    },
    textField: {
        height: 48,
        width: 358,
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 14,
        backgroundColor: '#EEEEEE',
        paddingLeft: 30,

    },
    textFieldContainer: {
        position: 'relative',
        width: 358,

    },
    textFieldWithIcon: {
        height: 48,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#EEEEEE',
        paddingRight: 70,
        paddingLeft: 30,
    },
    textFieldIcon: {
        position: 'absolute',
        top: 12,
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    clearIcon: {
        right: 40,
        width: 20,
        height: 20,
        margin: 4,
    },
    mapIcon: {
        right: 10,
    },
    laterbtn: {
        marginVertical: 20,
        width: 101,
        height: 36,
        borderRadius: 30,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "black"
    },
    laterText: {
        fontSize: 13,
        color: 'black',
    },
    buttonWrapper: {
        marginHorizontal: 30,
        alignItems: 'flex-end',
    },
    logoImg: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
    },
    contentheader: {
        fontSize: 13
    },
    listContent: {
        padding: 10,
        height: 65,
        width: 390,

        flexDirection: "row",

    },
    logoWrapper: {
        backgroundColor: "#EEEEEE",
        width: 36,
        height: 36,
        borderRadius: 18,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    textWrapper:{
        
        flexDirection:"column"
    },
    text1:{
        fontSize:16,
        color:"black",
        fontWeight:"bold",

    }
});
