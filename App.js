import React, { useState } from "react";
import {  FlatList, StyleSheet, Text, View } from "react-native";
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'buy milk', id: '1'
    },
    {
      text: 'create an app', id: '2'
    },
    {
      text: 'play some video games', id: '3'
    },
  ])

  return (
    <View style={styles.container}>
     <Header />
     <View style={styles.content}>
       {/** to do form */}
       <View style={styles.list}>
         <FlatList 
         data={todos} 
         keyExtractor={({id}) => id} 
         renderItem={({item: {text}}) => (
           <Text style={styles.listItem}>{text}</Text>
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
  listItem: {
    marginTop: 10,
    fontSize: 24,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10
  },
});
