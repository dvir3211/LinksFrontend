import AppContext from '../components/AppContext';
import React, {useContext} from 'react';


export function setUser(obj, userSettings){
    userSettings.setEmail(obj.email);
    userSettings.setPassword(obj.password);
    userSettings.setuserType(obj.user_type);
    userSettings.setUserLimit(obj.locations_limit);
    userSettings.setLocationsCount(obj.locations_count);
    userSettings.setUserId(obj.id);

}

export function updateUser(userSettings, apiHelper){
    apiHelper.login(userSettings.email, userSettings.password)
      .then((responseJson) => {
        console.log(responseJson);
        setUser(responseJson, userSettings);
      })
}
    