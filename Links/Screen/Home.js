import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Linking } from 'react-native';
import {useState, useEffect, createRef, useContext} from 'react';
import * as Clipboard from 'expo-clipboard';
import ApiHelper from '../utils/api/ApiHelper';
import Loader from '../Screen/Components/Loader';


const LinksScreen = ({navigation}) => {
    const [pageData, setPageData] = useState(null);
    const apiHelper = new ApiHelper();
    const [loading, setLoading] = useState(false);
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
        console.log("SETLOGIN true")
      setLoading(true)
      apiHelper.getLinks().then((res) => {
        parseData(res)        
     }).catch((error) => (console.log("Error in fetching data: "+error), alert('Error in fetching data: '+error)))
    .finally(console.log("Finish to fetch links"), setLoading(false))}
    // setLoading(false)

    })
    const parseData = (data) => {
      console.log("Parse Data!")
      setPageData((data.map(x => 
        <View style={styles.linkContainer}>
        <Text style={styles.appText}>Tag: {x.tag}</Text>
        <TouchableOpacity>
        <Text style={styles.appText} onPress={() => Clipboard.setStringAsync(x.link)}>Links: {x.link} (Press to copy)</Text>
        </TouchableOpacity>
        <Text style={styles.appText}>Modification Time: {x.last_modification_time}</Text>
        <TouchableOpacity hoverStyle={styles.hoverStyle} onPress={() => handleMapMode(x.location, x.tag, x.last_modification_time)}>
        <Text style={styles.appText} hoverStyle={styles.hoverStyle}>Location: {JSON.stringify(x.location)} </Text>
         </TouchableOpacity>
        </View>)
        ))
      
    }

    
    return (
      <View >
          <Loader loading={loading} />
        <View>
          <ScrollView style={styles.linkDataContainer} >{pageData}</ScrollView>
          <KeyboardAvoidingView enabled>
          <TouchableOpacity style={styles.appButtonContainer} text= "sdf" onPress={() =>(navigation.push("Add Links"))} activeOpacity={0.5}>
          <Text style={styles.appButtonText}>Add Links</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.appButtonContainer} onPress={() =>(navigation.push("Usage"))} activeOpacity={0.5}>
          <Text style={styles.appButtonText} >Usage</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appButtonContainer} onPress={() =>(navigation.replace("Links"))} activeOpacity={0.5}>
          <Text style={styles.appButtonText} >Refresh</Text>
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
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "black",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10
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
        paddingVertical: 10,
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
        paddingVertical: 10,
        paddingHorizontal: 12,
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
        height: 300
      }
  });
  export default LinksScreen;
 
