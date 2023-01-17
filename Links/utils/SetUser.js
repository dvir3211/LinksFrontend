import AppContext from '../components/AppContext';
import React, {useContext} from 'react';


export function setUser(obj, userSettings){
    userSettings.setEmail(obj.email);
    userSettings.setPassword(obj.password);
    userSettings.setuserType(obj.user_type);
    userSettings.setUserLimit(obj.locations_limit);
    userSettings.setLocationsCount(obj.locations_count);

}

