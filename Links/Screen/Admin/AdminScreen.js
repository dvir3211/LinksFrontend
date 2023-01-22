import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Linking } from 'react-native';
import {useState, useEffect, createRef, useContext} from 'react';
import AppContext from '../../components/AppContext';

import CheckBox from 'expo-checkbox';
import * as Clipboard from 'expo-clipboard';
import ApiHelper from '../../utils/api/ApiHelper';
import Loader from '../Components/Loader';


const AdminScreen = ({navigation}) => {
    const userSettings = useContext(AppContext);
    const apiHelper = new ApiHelper();
    // const [notActiveLink, setNotActiveLink] = useState(false);

      
    

    
    return (
      <View >
        <View>
          <KeyboardAvoidingView enabled>
          <TouchableOpacity style={styles.appButtonContainer} text= "sdf" onPress={() =>(navigation.push("Users"))} activeOpacity={0.5}>
          <Text style={styles.appButtonText}>Users</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.appButtonContainer} onPress={() =>(navigation.push("Add User"))} activeOpacity={0.5}>
          <Text style={styles.appButtonText}>Add User</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appButtonContainer} onPress={() =>(navigation.push("Admin"))} activeOpacity={0.5}>
          <Text style={styles.appButtonText}>Update User</Text>
          </TouchableOpacity>

          </KeyboardAvoidingView>
          
        </View>

      </View>
    );
  }
const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 16
    },
    checkBox: {
      alignItems:'flex-start',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      elevation: 8,
      backgroundColor: "black",
      color: "white",
      borderRadius: 0,
      paddingVertical: 0,
      paddingHorizontal: 10,
      margin: 1
    },
    box: {
      marginRight: 15,
      margin: 1
    },
    appButtonContainer: {
        elevation: 8,
        color: "white",
        backgroundColor: "black",
        borderRadius: 10,
        // paddingVertical: 10,
        // paddingHorizontal: 12,
        margin: 10,
        height:"20%"
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      appText:{
        color: 'white',
        borderRadius: 1,
        paddingVertical: 4,
        paddingHorizontal: 12,
        margin: 1
      },
      hoverStyle:{
        backgroundColor: "gray",
      },
      linkContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        elevation: 8,
        backgroundColor: "black",
        color: "white",
        borderRadius: 10,
        // paddingVertical: 10,
        // paddingHorizontal: 12,
        margin: 5
      }
      ,
      linkDataContainer: {
        elevation: 8,
        backgroundColor: "white",
        color: "black",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10,
        height: "65%"
      }
  });
  export default AdminScreen;
 
