import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import { Card} from "react-native-elements";
import { Calendar } from "react-native-calendars";
import { MenuProvider } from 'react-native-popup-menu';

import Login from './screens/login';
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  let content;
  const login = (params) => {

    const {email, password} = params;
    setEmailLogin(email);
    setPasswordLogin(password)

  };
  if(emailLogin && emailLogin === 'admin@gmail.com' && passwordLogin && passwordLogin === '123456') {
    content = (<HomeScreen/>)
  }
  if(content === undefined) {
    content = <Login onLogin = {login.bind(this)}></Login>
  }
  console.log('content: ', content)
  return (
      <MenuProvider>
        {content}
      </MenuProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1
  }
});

