import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/item';
import GoalInput from './components/input'


export default function App() {
  const [list, setList] = useState([]);

  function buttonHandler(text) {
    setList((currentList) => [
      ...currentList, {Data: text, id: Math.random().toString()},
    ]);
  };
  function deleteHandler(id){
    setList(currentList =>{
      return currentList.filter((item) => item.id !== id)
    })
  };

  return (
    <View style={styles.container}>
      <GoalInput addGoal={buttonHandler}  />
      <View style={styles.listContainer}>
        <FlatList data={list} renderItem={(listData)=>{
          return <GoalItem  text={listData.item.Data} deleteItem={deleteHandler} id={listData.item.id}/>
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
 
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '5%',
    flex: 4,
  },
 
});
