import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ReverseSubstring = ({ inputText, startIndex, endIndex }) => {
  const reverseSubstring = (text, start, end) => {
    const before = text.slice(0, start);
    const reversed = text.slice(start, end + 1).split('').reverse().join('');
    const after = text.slice(end + 1);
    return before + reversed + after;
  };

  const reversedText = reverseSubstring(inputText, startIndex, endIndex);

  return <Text style={styles.resultText}>{reversedText}</Text>;
};

const App = () => {
  const [startIndex, setStartIndex] = useState('');
  const [endIndex, setEndIndex] = useState('');
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setStartIndex(text)}
        value={startIndex}
        keyboardType="numeric"
        placeholder="Inicio"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEndIndex(text)}
        value={endIndex}
        keyboardType="numeric"
        placeholder="Final"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        placeholder="Ingresa un texto"
      />
      <ReverseSubstring inputText={inputText} startIndex={parseInt(startIndex)} endIndex={parseInt(endIndex)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default App;