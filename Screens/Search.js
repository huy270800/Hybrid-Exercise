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
        />
    );
}

export default Search