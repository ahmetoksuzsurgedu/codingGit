import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
// CALISTIRAMADIM CALISILACAK
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class DimensionsSample extends Component {
  state = {dimensions: {window,screen}};

  onChange = ({ window, screen }) => {
    this.setState({ dimensions: { window, screen } });
  };

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.onChange);
  }

  componentWillUnmount() {
    this.dimensionsSubscription?.remove();
  }

  render() {
    const { dimensions: { window, screen } } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Window Dimensions</Text>
        {Object.entries(window).map(([key, value]) => (
          <Text key={key+1}>{key} - {value}</Text>
        ))}
        <Text style={styles.header}>Screen Dimensions</Text>
        {Object.entries(screen).map(([key, value]) => (
          <Text key={key+1}>{key} - {value}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 16,
    marginVertical: 10
  }
});

export default DimensionsSample;