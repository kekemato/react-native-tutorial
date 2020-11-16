import React, { useState } from "react";
import {  FlatList, StyleSheet, Text, View } from "react-native";
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'buy milk', id: '1', isDone: false
    },
    {
      text: 'create an app', id: '2', isDone: false
    },
    {
      text: 'play some video games', id: '3', isDone: false
    },
  ])

  const deleteItem = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, isDone: !todo.isDone}
      }
      return todo
    }))
  }

  return (
    <View style={styles.container}>
     <Header />
     <View style={styles.content}>
       {/** to do form */}
       <View style={styles.list}>
         <FlatList 
         data={todos} 
         keyExtractor={({id}) => id} 
         renderItem={({item}) => (
           <TodoItem item={item} deleteItem={deleteItem}/>
         )}/>
       </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c5efff",
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 40
  },
});
