import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {
      name: "Magda",
      id: "1",
    },
    {
      name: "Patryk",
      id: "2",
    },
    {
      name: "Beatka",
      id: "3",
    },
    {
      name: "Jurek",
      id: "4",
    },
    {
      name: "Natalia",
      id: "5",
    },
    {
      name: "Leszek",
      id: "6",
    },
    {
      name: "Michał",
      id: "7",
    },
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id))
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={({ id }) => id}
        data={people}
        renderItem={({ item: { name, id } }) => (
          <TouchableOpacity onPress={() => pressHandler(id)}>
            <Text style={styles.listItem}>{name}</Text>
          </TouchableOpacity>
        )}
      />
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
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: "#fff",
    fontSize: 24,
  },
});
