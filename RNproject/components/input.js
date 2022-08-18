import { StyleSheet, View, TextInput, Button } from "react-native";
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
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInputStyle} onChangeText={getTextInput} placeholder='What do you want to do?' value={text} />
        <Button color='#98bf64' onPress={buttonHandler} title='add to list' />
      </View>
    );
};

const styles = StyleSheet.create({
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

})