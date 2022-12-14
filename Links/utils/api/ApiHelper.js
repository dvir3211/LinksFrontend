import AppContext from '../../components/AppContext';
import {useState, createRef, useContext} from 'react';


// Users
const LOGIN_URL = "/users/login";
const ADD_LINK = "/links/add";
const GET_LINKS = "/links";
const GET_LOCATION = "/get_location"

// const SERVER = "https://67dc-147-235-204-70.ngrok.io";
const SERVER = "https://web.post-il.net";




export default class ApiHelper{
    userSettings = useContext(AppContext);
    constructor() {
    }
       
    async addLink(tag, url){
        const res = await fetch(SERVER+ADD_LINK+'?'+'password='+this.userSettings.password+'&email='+this.userSettings.email, {method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"tag": tag, "url": url, "content": ""})}).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
        .then((responseJson) => {
            return responseJson.result;
        })
        .catch((error) => {
            console.log(error)
        });
        console.log("Finish to send data " + res)

        return res
    }
        
    async login(email, password){
            // call fetchData of Account
        
            const res = await fetch(SERVER.concat(LOGIN_URL), {method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"email": email, "password": password})}).then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error('Something went wrong');
              })
              .then((responseJson) => {
                console.log("Connected")
                console.log(responseJson)
                return responseJson
              })
              return res
        }
    async getLinks(){
        // call fetchData of Account
        console.log("Entered Get Links in apiHelper:  " + this.userSettings)
    
        const res = await fetch(SERVER+GET_LINKS+'?'+'password='+this.userSettings.password+'&email='+this.userSettings.email,
         {method: 'GET',}).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
            })
            .then((responseJson) => {
            return responseJson.result;
            })

        const result = res.map((link) => {
            return {"id": link.id,
            "location": link.location,
            "tag": link.tag,
            "last_modification_time": link.last_modification_time,
            "active": link.active, 
            "link": link.link, 
            }
        })
    
        return result
    
    }
}


   
// export default login;