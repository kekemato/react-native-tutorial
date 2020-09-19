import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {
      name: "Magda",
      key: "1",
    },
    {
      name: "Patryk",
      key: "2",
    },
    {
      name: "Beatka",
      key: "3",
    },
    {
      name: "Jurek",
      key: "4",
    },
    {
      name: "Natalia",
      key: "5",
    },
    {
      name: "Leszek",
      key: "6",
    },
    {
      name: "Michał",
      key: "7",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(({ name, key }) => (
          <View key={key}>
            <Text style={styles.listItem}>{name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c5efff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  listItem: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "#fff",
    fontSize: 24,
  },
});
