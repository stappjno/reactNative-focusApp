import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

import { fontSizes, spacing } from "../../utils/sizes";


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Auf was möchtest du dich fokussieren?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex: 1, marginRight: spacing.md}} 
          onSubmitEditing={
            ({nativeEvent}) => {
              setSubject(nativeEvent.text)
            }} />
          <RoundedButton size={80} title="+" onPress={() => {
            addSubject(subject)
          }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  titleContainer: {
    flex: 0.5,
    bottom:0,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.xl,
  },
  inputContainer: { 
    paddingTop: spacing.md, 
    flexDirection: "row"
    },
});
