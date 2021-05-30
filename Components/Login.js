import * as React from 'react';
import {Fragment, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import jwt_decode from "jwt-decode";

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}



export default function Login(props) {
    const [isLogged, onChangeIsLogged] = React.useState(false);
    const [username, onChangeLogin] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    async function login(username, password) {
        fetch('http://192.168.1.20:8000/api/login_check', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(function (response) {
            return response.json();
        }).then(async (json) => {
            if (json.token) {
               await save('token', json.token)
                onChangeIsLogged(await isUserAuthenticated())
            } else {
                // todo handle errors
                console.log('error')
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    async function isUserAuthenticated() {
        let result = await SecureStore.getItemAsync('token');
        if (result) {
            const decoded = jwt_decode(result)
            const expiryDate = new Date(decoded.exp * 1000);
            return new Date() < expiryDate;
        } else {
            return false;
        }
    }

    async function logout(){
        await SecureStore.deleteItemAsync('token');
        onChangeIsLogged(await isUserAuthenticated());
    }

    useEffect(() => {
        (async () => {
            onChangeIsLogged(await isUserAuthenticated());
        })();
    }, []);

    if (!isLogged) {
        return (
            <Fragment>
                <Text style={styles.paragraph}>Login</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeLogin(text)}
                    value={username}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangePassword(text)}
                    value={password}
                    placeholder="Password"
                />
                <Button
                    title="Login"
                    onPress={() => {
                        login(username, password);
                    }}
                />
            </Fragment>
        );
    }else{
        return(
            <Fragment>
        {
            React.Children.map(props.children, child => {

                    return child;
                })
        }
                <Button
                    title="Logout"
                    onPress={() => logout()}
                />
            </Fragment>
        )
    }


}

const styles = StyleSheet.create({
    paragraph: {
        marginTop: 34,
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInput: {
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 4,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        padding: 4,
    },
});
