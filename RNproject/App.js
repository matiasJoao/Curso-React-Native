
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInputStyle}placeholder='What do you want to do?'/>
        <Button title='add to list'/>
      </View>
      <View style={styles.listContainer}>
        <Text>To do list</Text>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
    container: {
      padding: '15%',
    },
    inputContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textInputStyle: {
      borderBottomWidth: 1,
      borderColor: 'black',
      margin: '1.2%',
    },
    listContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '5%'
    }
});
