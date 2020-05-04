
import React, {Component} from "react";
import {Text, View, TextInput, StyleSheet } from "react-native";
import CustomButton from "./ButtonComponent";

const InputAddView = (props) => {
    // var btnColor = props.color != undefined ? props.color : 'grey';
    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          onChangeText={props.changeText}
          value={props.valueText}
        />
        <CustomButton name="add-to-list" addEvent={props.addItemProp} />
      </View>
      
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-between",
        alignItems: "center",
      },
      textInput: {
        borderColor: "#082d5c",
        //borderWidth: 2,
        borderBottomWidth: 2,
        width: "80%",
        // borderRadius: 50,
        fontSize: 25,
        padding: 10,
      },
});

export default InputAddView;