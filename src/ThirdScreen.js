import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import image1 from '../images/thirdscreenlogo.png';
import image9 from '../images/economyride.png';
import image3 from '../images/luxuryride.png';
import image4 from '../images/delivery.png';
import image5 from '../images/food.png';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function ThirdScreen({ visible, onClose }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigation = useNavigation();
  const navigateTolater=()=>{
navigation.navigate("ForthScreen");
  }
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };


  const DropdownOptions = () => (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownItem} >
        <Text style={styles.dropdownText}>Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={navigateTolater}>
        <Text style={styles.dropdownText}>Later</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>Your Trip</Text>
          </View>

          <View style={styles.subContainer}>
            <Image source={image1} style={styles.logoimg} />
            <View style={styles.TextContainer}>
              <Text style={styles.text1}>pickup</Text>
              <Text style={styles.text2}>ABC USA</Text>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.subContainer}>
            <Image source={image1} style={styles.logoimg} />
            <View style={styles.TextContainer}>
              <Text style={styles.text1}>~ 25 min- arriving at 6:40PM</Text>
              <Text style={styles.text2}>Home</Text>
            </View>
            <TouchableOpacity style={styles.stopbtn} onPress={toggleDropdown}>
              <Text style={styles.stopText}>Stop</Text>
            </TouchableOpacity>
            {dropdownVisible && <DropdownOptions />}
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.subContainer}>
              <Image source={image9} style={styles.imgs} />
              <View style={styles.TextContainer}>
                <Text style={styles.text3}>Economy</Text>
                <Text style={styles.text4}>Best, Economy rides</Text>
              </View>
              <View style={styles.sideContainer}>
                <Text style={styles.sideText1}>$193.20</Text>
                <Text style={styles.sideText1}>2 mins away</Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <Image source={image3} style={styles.imgs} />
              <View style={styles.TextContainer}>
                <Text style={styles.text3}>Comfort</Text>
                <Text style={styles.text4}>Affordable, Compact rides</Text>
              </View>
              <View style={styles.sideContainer}>
                <Text style={styles.sideText1}>$293.20</Text>
                <Text style={styles.sideText1}>6 mins away</Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <Image source={image4} style={styles.imgs} />
              <View style={styles.TextContainer}>
                <Text style={styles.text3}>Luxury Ride</Text>
                <Text style={styles.text4}>Affordable, compact rides</Text>
              </View>
              <View style={styles.sideContainer}>
                <Text style={styles.sideText1}>$393.20</Text>
                <Text style={styles.sideText1}>2 mins away</Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <Image source={image5} style={styles.imgs} />
              <View style={styles.TextContainer}>
                <Text style={styles.text3}>Delivery</Text>
                <Text style={styles.text4}>Affordable, Delivery</Text>
              </View>
              <View style={styles.sideContainer}>
                <Text style={styles.sideText1}>$193.20</Text>
                <Text style={styles.sideText1}>35 mins away</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    height: 413,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
  justifyContent:"center",
    alignItems:"center",
    width: '100%',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
   
  },
  stopbtn: {
    padding: 10,
    width: 101,
    height: 36,
    borderRadius: 30,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nowText: {
    fontSize: 13,
    color: 'black',
    paddingLeft: 10,
  },
  dropdownContainer: {
    width: 101,
    position: 'absolute',
    top: 70, 
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
  },
  logoimg: {
    height: 31,
    width: 33,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  stopText: {
    fontSize: 13,
    color: 'black',
    paddingLeft: 10,
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
    padding: 4,
  },
  TextContainer: {
    flexDirection: 'column',
    padding: 8,
    flex: 1,
    textAlign: 'left',
  },
  text1: {
    color: 'black',
    fontSize: 8,
  },
  text2: {
    color: 'black',
    fontSize: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 6,
  },
  text3: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  text4: {
    color: 'black',
    fontSize: 10,
  },
  sideText1: {
    color: 'black',
    fontSize: 14,
  },
  sideContainer: {
    flexDirection: 'column',
  },
  imgs: {
    height: 30,
    width: 48,
  },
});
