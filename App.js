import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import { Card} from "react-native-elements";
import { Calendar } from "react-native-calendars"
import { MenuProvider } from 'react-native-popup-menu'
import Login from './screens/Login'

export default function App() {


  const login = (params) => {
    const {email, password} = params;
    if(password === '123456' && email === 'admin@gmail.com') {
      content =
          <MenuProvider>
            <View style={styles.screen}>
              <Header title="Time Sheet" />
              <Card>
                <Text>Miss Working Time</Text>
              </Card>
              <Card>
                <Text>Miss OT request</Text>
              </Card>
              <Card>
                <Text>OverTime Hours</Text>
              </Card>
              <Card>
                <Text>OT Over limit</Text>
              </Card>
              <Calendar></Calendar>
            </View>
          </MenuProvider>
    }
  }
  let content = <Login onLogin = {login.bind(this, 'test')}></Login>;

  return (
      {content}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

