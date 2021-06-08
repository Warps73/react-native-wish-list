import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import React from 'react'

export default function Card(props) {
    const {wishList, navigation} = props;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('WishList', {'wishList' : wishList})}>
            <View style={styles.container}>
                <Image style={styles.image}
                       source={require('../assets/default-wish-list.png')}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {wishList.title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        height : 200,
        marginLeft: 15,
        marginRight: 15,
        marginBottom : 25,
        backgroundColor : '#FFFFFF',
        overflow : 'hidden'
    },

    image : {
        width : '100%',
        height : '70%'
    },

    textContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },

    text : {
        fontWeight : 'bold',
        fontSize : 20
    }
});
