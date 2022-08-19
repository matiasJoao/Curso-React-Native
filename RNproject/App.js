import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar} from 'react-native';
import GoalItem from './components/item';
import GoalInput from './components/input'


export default function App() {
  const [list, setList] = useState([]);
  const[modal, setModal] = useState(false);

  function ModalVisibility(){
    setModal(true);
  }
  function ModalVisibilityCancel(){
    setModal(false);
  }
  function buttonHandler(text) {
    setList((currentList) => [
      ...currentList, {Data: text, id: Math.random().toString()},
    ]);
    ModalVisibilityCancel();
  };
  function deleteHandler(id){
    setList(currentList =>{
      return currentList.filter((item) => item.id !== id)
    })
  };

  return (
    <>
    <StatusBar style='auto' />
    <View style={styles.container}>
      <Button color='#98bf64' onPress={ModalVisibility} title='Start List'/>
      <GoalInput visibleCancel={ModalVisibilityCancel} visible={modal} addGoal={buttonHandler}  />
      <View style={styles.listContainer}>
        <FlatList data={list} renderItem={(listData)=>{
          return <GoalItem  text={listData.item.Data} deleteItem={deleteHandler} id={listData.item.id}/>
        }}
        keyExtractor={(item, index)=>{
          return item.id
        }}/>
      </View>
    </View>
    </>
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
