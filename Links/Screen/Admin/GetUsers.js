import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Linking, Alert } from 'react-native';
import {useState, useEffect, createRef, useContext} from 'react';
import AppContext from '../../components/AppContext';
import { confirmAlert } from 'react-confirm-alert'; 

import CheckBox from 'expo-checkbox';
import * as Clipboard from 'expo-clipboard';
import ApiHelper from '../../utils/api/ApiHelper';
import Loader from '../../Screen/Components/Loader';


const UsersScreen = ({navigation}) => {
    const userSettings = useContext(AppContext);
    const [pageData, setPageData] = useState(null);
    const apiHelper = new ApiHelper();
    const [loading, setLoading] = useState(false);
    const [activeLink, setActiveLink] = useState(false);

    // const [notActiveLink, setNotActiveLink] = useState(false);
    const handleMapMode = (location, tag, time) => {
      if (location === null){
        alert('There is no location for this link!');
      return;
      }
      // navigation.push("Maps Screen", {lat:location.lat, lan:location.lan, tag:tag, time:time})
      let url = 'https://www.google.com/maps/search/?api=1&query='+location.lat+'%2C'+location.lan
      Linking.openURL(url)
    };
    useEffect(()=>{
      if (pageData===null){
      updateData()
      }
    })
    const updateData = () => {
      apiHelper.getUsers().then((res) => {
        parseData(res)        
     }).catch((error) => (console.log("Error in fetching data: "+error), alert('Error in fetching data: '+error)))
    .finally(console.log("Finish to fetch links"), setLoading(false))
    }
    const toggle = () => {
      console.log("entered togel")
      setActiveLink(!activeLink)
      updateData()
    }

    const updateLocatoinsLimit = (userId) => {
      navigation.push("Update locations limit", {"userId": userId})

    }
    const deleteUser = (userId) =>
    Alert.alert(
      'Delete confirmation',
      'Are you sure you want to delete this user?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => apiHelper.deleteUser(userId).then((res) => {
            navigation.replace("Users")       
           }).catch((error) => (console.log("Error in fetching data: "+error), alert('Error in deleting user: '+userId)))
          .finally(console.log("Finish to fetch links"), setLoading(false)),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          console.log("dismissed")
      },
  );


    
    const parseData = (data) => {
      console.log("Parse Data!")
      setPageData((data.map(user => {console.log(user); return (
        <View style={styles.linkContainer}>
        <Text style={styles.appText}>Username: {user.username}</Text>
        <Text style={styles.appText}>Email: {user.email}</Text>
        <Text style={styles.appText}>User type: {user.user_type}</Text>
        <Text style={styles.appText}>Locations count: {user.locations_count}</Text>
        <Text style={styles.appText}>Locations limit: {user.locations_limit}
        <TouchableOpacity
            style={styles.appButtonContainer}
              activeOpacity={0.5}
              onPress={() => updateLocatoinsLimit(user.id)}>
              <Text style={styles.appButtonText}>Update locations limit</Text>
            </TouchableOpacity>
        </Text>      
        <Text style={styles.appText}>Sum open links: {user.links_count}</Text>
        <Text style={styles.appText} onPress={() => Clipboard.setStringAsync(user.id)} >id: {user.id}</Text>
        <Text style={styles.appText}>Owner id: {user.owner_id}</Text>
        <Text style={styles.appText}>{user.active? "<< This User is active! >>": "<< This user is not active! >>" }</Text>
        {user.id !== userSettings.userId?<Text style={styles.appButtonText} onPress={() => deleteUser(user.id)}>Delete User</Text>:""}
        {/* {user.id !== userSettings.userId?<Text style={styles.appButtonText} onPress={() => deleteUser(user.id)}>Delete User</Text>:""} */}
        </View>)})
        ))
      
    }

    
    return (
      <View >
          <Loader loading={loading} />
        <View>
        
          <ScrollView style={styles.linkDataContainer} >{pageData}</ScrollView>
          
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
    appButtonContainer: {
        elevation: 8,
        color: "white",
        backgroundColor: "black",
        borderRadius: 10,
        // paddingVertical: 10,
        // paddingHorizontal: 12,
        margin: 10,
        height:"10%"
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
        height: "80%"
      }
  });
  export default UsersScreen;
 
