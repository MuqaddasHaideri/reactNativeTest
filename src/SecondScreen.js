import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import image from '../images/btnlogo.png';
import image1 from '../images/Auto Layout Horizontal.png';

import ThirdScreen from './ThirdScreen';

export default function SecondScreen() {
  const [modalVisible, setModalVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const showSecondModal = () => {
    setSecondModalVisible(true);
    setDropdownVisible(false); 
  };

  const hideSecondModal = () => {
    setSecondModalVisible(false);
  };

  const DropdownOptions = () => (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownItem} onPress={showSecondModal}>
        <Text style={styles.dropdownText}>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem}>
        <Text style={styles.dropdownText}>later</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topRightButtonContainer}>
        <TouchableOpacity style={styles.topRightButton} onPress={showModal}>
          <Image source={image} style={styles.logoImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
       
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.headerText}>Where to?</Text>
              <TouchableOpacity style={styles.nowbtn} onPress={toggleDropdown}>
                <Image source={image1} style={styles.logobtn} />
                <Text style={styles.nowText}>Now</Text>
              </TouchableOpacity>
              {dropdownVisible && <DropdownOptions />}
            </View>
            <View style={styles.textFieldsContainer}>
              <TextInput
                style={styles.textField}
                placeholder="Add a pickup location"
                placeholderTextColor="black"
              />
              <TextInput
                style={styles.textField}
                placeholder="Enter your destination"
                placeholderTextColor="black"
              />
            </View>
          </View>
        </View>
      </Modal>
      <ThirdScreen visible={secondModalVisible} onClose={hideSecondModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  logoImg: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    height: 258,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  nowbtn: {
    padding: 10,
    width: 101,
    height: 36,
    borderRadius: 30,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
  },
  dropdownContainer: {
    width: 101,
    position: 'absolute',
    top: 40,
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
  textFieldsContainer: {
    flexDirection: 'column',
    marginVertical: 20,
  },
  textField: {
    height: 48,
    width: 358,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 14,
    textAlign: 'center',
    backgroundColor: '#EEEEEE',
  },
  logobtn: {
    height: 14,
    width: 14,
  },
  nowText: {
    fontSize: 13,
    color: 'black',
    paddingLeft: 10,
  },
  separator: {
    width: 2,
    backgroundColor: '#ccc',
    height: 48,
  },
});
