import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';


function Search() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style = {styles.backgroundContainer}
        />
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: '#E7879A',
    }, 
})


export default Search