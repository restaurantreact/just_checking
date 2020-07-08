import React,{Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

  const App = () => {
  return(
      <View style={styles.container}>
        <Text style={styles.text}>
           Hello world   
         </Text>
         <Image source={{uri: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg'}}
         style={styles.img}
         />
        
      </View>

    );
  };
const styles = StyleSheet.create({
    container:
    {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      color:'darkslateblue',
      fontSize:50,
    },
    img:{
      width:100,
      height:100,
      borderRadius:100/2,
    },
})
export default App;