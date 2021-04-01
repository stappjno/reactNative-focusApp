import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  const historyItem = ({ item, index }) => {
    return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
  };

  return (
    <>
      {/*
    
      
      
        
     */}
      <SafeAreaView
        style={{
          flex:0.5,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>
              Bisher fokussiert auf:
            </Text>
            <FlatList
              contentContainerStyle={{ }}
              data={focusHistory}
              renderItem={historyItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton size={50} title="leeren" onPress={() => onClear()} />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    backgroundColor: status > 1 ? '#345661' : '#5e6e43',
    fontSize: fontSizes.md,
    padding:spacing.md,
    color: "white"
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md
  }
});
