import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from '../Components/ProductList'

function Product(props) {
    console.log(props)
    return (
        <ProductList data={props.data}/>
    );
}

export default Product 