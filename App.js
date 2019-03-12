/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Animated, StyleSheet, Text, View, Button } from "react-native";

const FROM_VALUE = -1000;
const TO_VALUE = 1000;

type Props = {};
export default class App extends Component<Props> {
  state = {
    animatedJS: new Animated.Value(0),
    animatedNative: new Animated.Value(0)
  };
  runJS = () => {
    this.state.animatedJS.setValue(FROM_VALUE);
    Animated.timing(this.state.animatedJS, {
      toValue: TO_VALUE,
      duration: 3000
    }).start();
  };
  runNative = () => {
    this.state.animatedNative.setValue(FROM_VALUE);
    Animated.timing(this.state.animatedNative, {
      toValue: TO_VALUE,
      duration: 3000,
      useNativeDriver: true
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.text}>JS driver</Text>
          <Button title="Run" onPress={this.runJS} />
          <Animated.View
            style={{
              position: "absolute",
              top: 200,
              left: 5,
              right: 5,
              height: 50,
              backgroundColor: "red",
              transform: [
                { translateY: Animated.modulo(this.state.animatedJS, 100) }
              ]
            }}
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Native driver</Text>
          <Button title="Run" onPress={this.runNative} />
          <Animated.View
            style={{
              position: "absolute",
              top: 200,
              left: 5,
              right: 5,
              height: 50,
              backgroundColor: "green",
              transform: [
                { translateY: Animated.modulo(this.state.animatedNative, 100) }
              ]
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  column: {
    marginTop: 50,
    flex: 1,
    height: "100%"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
