import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card} from "react-native-elements";
import { Calendar } from "react-native-calendars"

import Header from "../components/Header";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View>
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
    </View>)
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default HomeScreen;
