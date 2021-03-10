import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ProductList() {
    
    return (
        <View style={styles.container}>
           
           <Text>This is list page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default ProductList