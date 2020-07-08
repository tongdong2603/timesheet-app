import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Header } from "react-native-elements";
import { Calendar } from "react-native-calendars"


const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.screen}>
      <View>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer()}}
            centerComponent={{ text: 'Time Sheet', style: { color: '#fff', fontSize: 24, fontWeight: 'bold',  } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
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
    </View>)
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default HomeScreen;
