import * as React from 'react';
import Login from "./Components/Login";
import {SafeAreaView, Text, StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./Components/Home";
import WishList from "./Components/WishList";


const Stack = createStackNavigator();




function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}


export default function App() {
    return (

        <SafeAreaView style={styles.container}>
                <Login>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen
                                name="WishList"
                                component={WishList}
                                options={({ route }) => ({ title: route.params.wishList.title })} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Login>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
});
