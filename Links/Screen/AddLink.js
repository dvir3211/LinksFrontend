import AppContext from './components/AppContext';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useState, createRef, useContext} from 'react';
import * as Clipboard from 'expo-clipboard';
import ApiHelper from './utils/api/ApiHelper';

const AddLinks = ({navigation}) => {
    const userSettings = useContext(AppContext);
    const [url, setUrl] = useState('');
    const [tag, setTag] = useState('');    
    const [fullUrl, setfullUrl] = useState('  ');    

    const apiHelper = new ApiHelper();

    const handleCopyPress = () => {
        Clipboard.setStringAsync(fullUrl);
        navigation.replace("Links");
      };

    const handleSubmitPress = () => {
        console.log("Before PosT")
        console.log("Tag: "+ tag+" url: "+url)

        if (!url) {
          alert('Please fill url');
          return;
        }
        if (!tag) {
          alert('Please fill tag');
          return;
        }
        apiHelper.addLink(tag, url).then((res) => {
            console.log(res)
            setfullUrl(res.link)
            // navigation.replace("Links")     
          }).catch((error ) => alert("Error in sending data" + error))
          .finally(console.log("Finish to send links"));
      };

    return (
      <View >
        <TextInput
                style={styles.appButtonContainer}
                onChangeText={(url) => setUrl(url)}
                placeholder="Enter url" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current && passwordInputRef.current.focus()
                // }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
        <TextInput
                style={styles.appButtonContainer}
                onChangeText={(tag) => setTag(tag)}
                placeholder="Enter tag" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current && passwordInputRef.current.focus()
                // }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
        <TouchableOpacity
            style={styles.appButtonContainer}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.appButtonText}>Add Link</Text>
            </TouchableOpacity>
        <TouchableOpacity
        style={styles.appButtonContainer}
            activeOpacity={0.5}
            onPress={handleCopyPress}>
            <Text style={styles.appButtonText}>Press to copy {"\n" +fullUrl}</Text>
        </TouchableOpacity>
      </View>
    );
  }

//             // onPress={() => {navigator.clipboard.writeText(fullUrl)}

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

  export default AddLinks;
