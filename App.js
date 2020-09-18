import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6dcff6",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#c5efff",
    padding: 20,
  },
});
