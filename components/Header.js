import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Lista rzeczy do zrobienia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 50,
        paddingLeft: 15,
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
      },
})

export default Header;