import AppContext from '../../components/AppContext';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useState, createRef, useContext} from 'react';
import * as Clipboard from 'expo-clipboard';
import ApiHelper from '../../utils/api/ApiHelper';

const UpdateLocationsLimit = (props) => {
    const userId = props.route.params.userId
    const userSettings = useContext(AppContext);
    const [locationsLimit, setLocationsLimit] = useState('');
  

    const apiHelper = new ApiHelper();

    const handleSubmitPress = () => {

        if (!locationsLimit) {
          alert('Please fill locations limit!');
          return;
        }
        apiHelper.updateLocationsLimit(userId, locationsLimit).then((res) => {
            console.log(res)
            props.navigation.replace("Users")     
          }).catch((error ) => alert("One of your parameters is not good! " + error))
          .finally(console.log("Finish to send links"));
      };

    return (
      <View >
        <TextInput
                style={styles.appButtonContainer}
                onChangeText={(locationsLimit) => setLocationsLimit(locationsLimit)}
                placeholder="Enter new locations limit" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />

        <TouchableOpacity
            style={styles.appButtonContainer}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.appButtonText}>Update locations limit</Text>
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

  export default UpdateLocationsLimit;
