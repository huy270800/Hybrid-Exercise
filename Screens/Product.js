import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from '../Components/ProductList'
import axios from 'axios';

function Product() {
    const [data, setData] = useState([])
    useEffect(() => {
        // axios({
        //     url: 'http://localhost:3000/products',
        //     method: 'GET'
        // })
        //     .then(res => {
        //         console.log(res.data)
        //         setData(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        getData()
    }, [])
    const getData = async () => {
        try {
            const dataResponse = await axios.get('https://graded-ex.herokuapp.com/products');
            const dataProduct = dataResponse.data.products;
            console.log(dataProduct.products);
            setData(dataProduct)
        }catch(err){
            console.log(err)
        }
    }

    return (
      <ProductList data={data}/>
    );
}

export default Product 