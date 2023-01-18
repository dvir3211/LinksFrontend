import * as React from 'react';
import {useState}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screen/LoginScreen'
import MapsScreen from './Screen/Maps'
import LinksScreen from './Screen/Home';
import AdminScreen from './Screen/Admin/AdminScreen';
import AppContext from './components/AppContext';
import AddLinks from './Screen/AddLink';
import Usage from './Screen/Usage'
import UsersScreen from './Screen/Admin/GetUsers'
import AddUser from './Screen/Admin/AddUser';


const Stack = createNativeStackNavigator();

function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);
  const [userType, setuserType] = useState("");
  const [userlimit, setUserLimit] = useState(0);
  const [userId, setUserId] = useState("");
  const [locationsCount, setLocationsCount] = useState(0);
  
  const userSettings = {
    email: email,
    userId: userId,
    password: password,
    login: login,
    data,
    userType: userType,
    userLimit: userlimit,
    locationsCount: locationsCount,
    setUserId,
    setUserLimit,
    setLocationsCount,
    setuserType,
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
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="Add User" component={AddUser} />
      </Stack.Navigator>
    </AppContext.Provider>
    </NavigationContainer>
  );
}

export default App;