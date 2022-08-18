import React from "react";
import {StyleSheet, View, Text } from "react-native";

export default function Item(props) {
    return (
    <View style={styles.ListMapContainer}>
        <Text style={styles.textList}>{props.text}</Text>
    </View>
    )
};  

const styles = StyleSheet.create({
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

})