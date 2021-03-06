import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return ( <
        View >
        <
        Text style = { styles.text } > Hi Pallav! < /Text>

        <
        Button onPress = {
            () => navigation.navigate('Components')
        }
        title = "Go to Components Demo" /
        >




        <
        Button title = "Go to Counter Demo"
        onPress = {
            () => navigation.navigate('Counter')
        }
        />

        <
        Button title = "Go to Color Demo"
        onPress = {
            () => navigation.navigate('Color')
        }
        />

        <
        /View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;