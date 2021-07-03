import React from 'react';
import {Text} from "react-native";

export default function WishList({ route, navigation }) {

    const { wishList } = route.params;
    return (
       <Text>Salut {wishList.id}</Text>
    );
}

