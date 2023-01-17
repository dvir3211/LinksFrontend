import AppContext from '../components/AppContext';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useState, createRef, useContext} from 'react';
import * as Clipboard from 'expo-clipboard';
import ApiHelper from '../utils/api/ApiHelper';

const Usage = ({navigation}) => {
  const userSettings = useContext(AppContext);

    return (
      <View >
        <Text style={styles.appButtonContainer}>
          Links with locations: {userSettings.userLimit}
        </Text> 
        <Text style={styles.appButtonContainer}>
          Links limit: {userSettings.locationsCount}
        </Text> 
      </View>
    );
  }


  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 16
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "black",
        color: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10,
        
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  });

  export default Usage;
