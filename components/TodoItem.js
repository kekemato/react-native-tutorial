import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = ({ item: { text, id, isDone }, deleteItem }) => {
  return (
    <TouchableOpacity onPress={() => deleteItem(id)}>
      <Text style={isDone ? styles.doneListItem : styles.listItem}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    fontSize: 24,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  doneListItem: {
    marginTop: 10,
    fontSize: 24,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    color: "gray",
  },
});

export default TodoItem;
