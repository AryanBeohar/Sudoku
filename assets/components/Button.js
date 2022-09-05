import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity , View} from 'react-native';
const Button = props => {
  return (
    <SafeAreaView>
       
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.Button, {...props.externalStyle}]}>
        <Text style={[{textAlign:'center', padding:12, fontSize:25 },{...props.style2}]}>{props.name}</Text>
      </TouchableOpacity>
    
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Button: {
width:36,
height:45,
    // borderBottomWidth: 1,
    // overflow:'hidden' 

  },
});
export default Button;