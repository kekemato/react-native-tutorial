import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Magda");
  const [age, setAge] = useState("25");

  const clickHandler = () => {
    setName((prevState) => (prevState === "Magda" ? "Patryk" : "Magda"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.fromContainer}>
        <Text style={styles.inputLabel}>Enter name:</Text>
        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="Magdalena Sztajdel"
          onChangeText={(value) => setName(value)}
        />
        <Text style={styles.inputLabel}>Enter age:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="25"
          onChangeText={(value) => setAge(value)}
        />
        <Text style={styles.inputLabel}>
          name: {name} age: {age}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c5efff",
    alignItems: "center",
    justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  fromContainer: {
    width: "50%",
  },
  inputLabel: {
    fontWeight: "bold",
  },
  input: {
    padding: 8,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
});
