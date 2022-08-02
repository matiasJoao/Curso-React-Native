import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [text, setTextInput] = useState('');
  const [list, setList] = useState([]);
  function getTextInput(textRecive) {
    setTextInput(textRecive)
  };
  function buttonHandler() {
    setList((currentList) => [
      ...currentList, text,
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInputStyle} onChangeText={getTextInput} placeholder='What do you want to do?' />
        <Button color='#98bf64' onPress={buttonHandler} title='add to list' />
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          {list.map((toDo) =>
            <View style={styles.ListMapContainer} key={toDo}>
              <Text style={styles.textList}>{toDo}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '15%',
    flex: 1,
    backgroundColor: '#ebf3e7',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderColor: 'black',
    margin: '1.2%',
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '5%',
    flex: 4,
  },
  ListMapContainer: {
    marginTop: '6%',
    padding: 7,
    borderWidth: 1.2,
    borderColor: '#728c69',
    borderRadius: 7,
  },
  textList: {
    textAlign: 'center',
    color: '#98bf64',
  }
});
