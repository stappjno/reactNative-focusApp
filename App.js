import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { spacing } from './src/utils/sizes';

// or any pure javascript modules available in npm
import { Focus } from './src/features/focus/Focus';

const STATUSES = {
  COMPLETE: 1,
  CANCELlED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWidthStatus = (subject, status) => {
    setFocusHistory([...focusHistory, { key: String(focusHistory.length + 1), subject, status }]);
  };

  const onClear = () => {
    setFocusHistory([]);
  }

  const saveFocusHistory = async () => {
    try {
      AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    }catch(e){
      console.log(e);
    }
  } 

  const loadFocusHistory = async () => {
    try{
      const history = await AsyncStorage.getItem('focusHistory');

      if(history && JSON.parse(history).length){
        setFocusHistory(JSON.parse(history));
      }
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory])

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWidthStatus(focusSubject, STATUSES.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWidthStatus(focusSubject, STATUSES.CANCELlED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
          <Focus addSubject={setFocusSubject} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
  },
});
