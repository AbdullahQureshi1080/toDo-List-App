
import React, {Component} from "react";
import {Text, View, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import CustomButton from "./ButtonComponent";
import {
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

const InputAddView = (props) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          onChangeText={props.changeText}
          value={props.valueText}
        />
        
        <CustomButton name="add-to-list" addEvent={props.addItemProp} disabled = {props.disabledEmptyInput} />
        
      </View>
      
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft:20,
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