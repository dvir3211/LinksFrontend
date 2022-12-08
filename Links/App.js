import * as React from 'react';
import {useState}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screen/LoginScreen'
import MapsScreen from './Screen/Maps'
import LinksScreen from './Screen/Home';
import AppContext from './components/AppContext';
import AddLinks from './Screen/AddLink';
import Usage from './Screen/Usage'



const Stack = createNativeStackNavigator();

function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);
  
  const userSettings = {
    email: email,
    password: password,
    login: login,
    data,
    setData,
    setLogin,
    setEmail,
    setPassword,
  };

  return (
    <NavigationContainer>
    <AppContext.Provider value={userSettings}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Links" component={LinksScreen} />
        <Stack.Screen name="Add Links" component={AddLinks} />
        <Stack.Screen name="Maps Screen" component={MapsScreen} />
        <Stack.Screen name="Usage" component={Usage} />
      </Stack.Navigator>
    </AppContext.Provider>
    </NavigationContainer>
  );
}

export default App;