import AppContext from '../../components/AppContext';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useState, createRef, useContext} from 'react';
import * as Clipboard from 'expo-clipboard';
import ApiHelper from '../../utils/api/ApiHelper';

const AddUser = ({navigation}) => {
    const userSettings = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');    
    const [locationsLimit, setLocationsLimit] = useState('');    
    const [email, setEmail] = useState('');    

    const apiHelper = new ApiHelper();

    const handleSubmitPress = () => {

        if (!username) {
          alert('Please fill username!');
          return;
        }
        if (!password) {
          alert('Please fill password!');
          return;
        }
        if (!locationsLimit) {
            alert('Please fill locations limit!');
            return;
        }
        if (!email) {
        alert('Please fill email!');
        return;
        }
        apiHelper.addUser(password, username, locationsLimit, email).then((res) => {
            console.log(res)
            navigation.replace("Admin")     
          }).catch((error ) => alert("One of your parameters is not good!"))
          .finally(console.log("Finish to send links"));
      };

    return (
      <View >
        <TextInput
                style={styles.appButtonContainer}
                onChangeText={(username) => setUsername(username)}
                placeholder="Enter username" //dummy@abc.com
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
                onChangeText={(password) => setPassword(password)}
                placeholder="Enter password" //dummy@abc.com
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
                onChangeText={(limit) => setLocationsLimit(limit)}
                placeholder="Enter Locations limit" //dummy@abc.com
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
                onChangeText={(email) => setEmail(email)}
                placeholder="Enter email" //dummy@abc.com
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
              <Text style={styles.appButtonText}>Add User</Text>
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

  export default AddUser;
