import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export const RoundedButton = ({
  style = {},
  text = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text 
      style={[styles(size).text, style]}
      >{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 2,
    },
    text: {
      color: '#FFF',
      fontSize: size / 4,
    },
  });
