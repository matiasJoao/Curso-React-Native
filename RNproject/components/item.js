import React from "react";
import {StyleSheet, View, Text, Pressable } from "react-native";

export default function Item(props) {
    return (
    
        <View style={styles.ListMapContainer}>
        <Pressable android_ripple={{color:'#98bf64'}} onPress={props.deleteItem.bind(this, props.id)}
                    style={({pressed})=> pressed && styles.iphoneFeedback}            >
            <Text style={styles.textList}>{props.text}</Text>
        </Pressable> 
        </View>
    
    )
};  

const styles = StyleSheet.create({
    ListMapContainer: {
        marginTop: '6%',
        borderWidth: 1.2,
        borderColor: '#728c69',
        borderRadius: 7,
        backgroundColor: '#ebf3e7',
      },
      iphoneFeedback: {
        opacity: 0.5
      },
      textList: {
        padding: 7,
        textAlign: 'center',
        color: '#98bf64',
      }

})