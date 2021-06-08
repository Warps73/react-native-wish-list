import * as SecureStore from 'expo-secure-store';
import jwt_decode from "jwt-decode";

export async function getUserWishLists (){
    const token = await SecureStore.getItemAsync('token');
    const payload = jwt_decode(token)
    return fetch(
        `http://192.168.1.20:8000/api/users/${payload.userId}/wish_lists`, {
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
