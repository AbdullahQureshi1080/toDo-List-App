import React, {Component} from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons,Entypo, FontAwesome } from '@expo/vector-icons';

const CustomButton = (props) => {
    var btnColor = props.color != undefined ? props.color : 'grey';
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.addEvent}
        >
            <View style={{ ...styles.buttonContainer, backgroundColor: btnColor }}>
                <Entypo name = {props.name}  style={styles.buttonText}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 10,
        padding: 10,
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    }
})

export default CustomButton;