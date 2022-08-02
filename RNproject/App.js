import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [text, setTextInput] = useState('');
  const [list, setList] = useState([]);
  function getTextInput(textRecive) {
    setTextInput(textRecive)
  };
  function buttonHandler() {
    setList((currentList) => [
      ...currentList, {Data: text, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInputStyle} onChangeText={getTextInput} placeholder='What do you want to do?' />
        <Button color='#98bf64' onPress={buttonHandler} title='add to list' />
      </View>
      <View style={styles.listContainer}>
        <FlatList data={list} renderItem={(listData)=>{
          return <View style={styles.ListMapContainer}>
                      <Text style={styles.textList}>{listData.item.Data}</Text>
                </View>
        }}
        keyExtractor={(item, index)=>{
          return item.id
        }}/>
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
    borderBottomWidth: 0.7,
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
