import * as SecureStore from 'expo-secure-store';
import jwt_decode from "jwt-decode";


export async function getUserWishLists (){
    const token = await SecureStore.getItemAsync('token');
    const payload = jwt_decode(token)
    return fetch(
        `${process.env.API_ENDPOINT}/users/${payload.userId}/wish_lists`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
    ).then((response) => response.json())
     .catch((error) => console.error(error))
}
