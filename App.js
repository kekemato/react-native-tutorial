import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Magda");

  const clickHandler = () => {
    setName((prevState) => (prevState === "Magda" ? "Patryk" : "Magda"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, {name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Update state" onPress={clickHandler} />
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
  boldText: {
    fontWeight: "bold",
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
