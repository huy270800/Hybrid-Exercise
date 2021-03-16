import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';

 function ProductList(props) {
    
    console.log(props.data)
    return (
        <View style={styles.container}> 
          {props.data.map((prod) => {
              
              return (<View style= {styles.backgroundContainer}>
                  <View style={styles.pictureContainer}> 
                          <Image source={prod.images} style={styles.image} />
                  </View>
                  <View style= {styles.detailContainer}>
                  <Text>
                          {prod.price} <br />
                          {prod.title}<br />
                          {prod.location}<br />
                          {prod.category}<br />
                          {prod.imageUrl}
                  </Text>
                     
                  </View>
              </View>)
          })}
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: null,
        height: null,
        backgroundColor: '#E7879A',
    },
    image:{
        width: 100,
        height: 100,
    },
    pictureContainer: {
        width: 100,
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    detailContainer: {
        width: '80%',
        alignItems:'flex-end',
        justifyContent: 'center'
    }
})

export default ProductList