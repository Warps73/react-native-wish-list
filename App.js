import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import Login from "./Components/Login";
import {Button, SafeAreaView, Text, StyleSheet} from "react-native";



export default function App() {
    return (
        <SafeAreaView style={styles.container}>
                <Login>
                    <Text>Salut</Text>
                </Login>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
});
