import {FlatList, Text, StyleSheet, View} from "react-native";
import * as React from "react";
import {useEffect} from "react";
import {getUserWishLists} from "../Api/WishListApi";
import WishListCard from "./WishListCard";
import Loader from "./Loader";

export default function HomeScreen({ navigation }) {
    const [wishLists, onChangeWishLists] = React.useState([]);
    const [loading, onChangeLoading] = React.useState(true);


    useEffect(() => {
        (async () => {
            onChangeWishLists(await getUserWishLists());
            onChangeLoading(false);
        })();
    }, []);

    if(loading){
        return <Loader/>
    }

    return (
        <View
            style={{flex:1,flexDirection:"row", justifyContent : "space-between", alignItems : "center"}}
        >
            <FlatList
                numColumns={2}
                columnWrapperStyle={style.row}
                data={wishLists}
                keyExtractor={(item) => item.wishList.id.toString()}
                renderItem={({item}) => <WishListCard navigation={navigation} wishList={item.wishList}/>}
            />
        </View>
    );

}
const style = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "space-around"
    }
});
