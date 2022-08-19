import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";


export default function input(props){

    const [text, setTextInput] = useState('');

    function getTextInput(textRecive) {
        setTextInput(textRecive);
      };

    function buttonHandler(){
        props.addGoal(text);
        setTextInput('');
    };
    return (
      <Modal  style={styles.modal} visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image source={require('../assets/image/goal.png')} style={styles.image}  />
          <TextInput style={styles.textInputStyle} onChangeText={getTextInput} placeholder='What do you want to do?' value={text} />
          <Button color='#98bf64' onPress={buttonHandler} title='add to list' />
          <Button color='#98bf64' title='Close' onPress={props.visibleCancel} />
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ebf3e7',
        flex: 1,
      },
      textInputStyle: {
        borderBottomWidth: 0.7,
        borderColor: 'black',
        margin: '1.2%',
        textAlign: 'center',
      },
      image: {
        width: 200,
        height: 200,
        marginHorizontal: '26.4%',
        marginBottom: '20%',
      },
      modal: {
        backgroundColor: '#ebf3e7',
      }

})