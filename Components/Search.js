import React from 'react';
import {View, TextInput, Button, StyleSheet, FlatList} from 'react-native';
import FilmItem from './FilmItem'
import films from '../Helpers/filmsData';
function Search() {
    return (
        <View style={styles.main_container }>
            <TextInput style={styles.textInput} placeholder='Titre du film'/>
            <Button title='Rechercher'  onPress={() => {}}/>
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});

export default Search;
