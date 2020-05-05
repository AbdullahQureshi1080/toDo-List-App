
import React, {Component} from "react";
import {Text, TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import {
    AntDesign,
    MaterialIcons,
  } from "@expo/vector-icons";

const ScrollViewItem = (props) => {
  if (props.disabled) {
    var btnColor = props.color != undefined ? props.color : "#13517e";
  } else {
    var btnColor = props.color != undefined ? props.color : "grey";
  }
    return (
    <TouchableOpacity
        key={props.key}
        activeOpacity={props.activeOpacity}
        onPress={props.onPress}
        disabled={props.disabled}
  >
        {/*----------------------Scroll View Item ------------------ */}      

            <View style={styles.scrollviewItem}>
            <View style={styles.scrollviewIndexAndData}>
                <View style={styles.scrollviewIndexView}>
                    <Text style={styles.scrollviewIndexText}>{props.indexData}</Text>
                </View>
                <View style={styles.scrollviewDataView}>
                <Text style={styles.scrollviewText}>{props.itemData}</Text>
                </View>     
            </View>
            

            <View style={styles.updateDeleteButtonContainer}>
                
                {/*----------------------Update Item------------------ */}

            <TouchableOpacity onPress={props.onPressUpdate} >
                <View style={{...styles.updateIconContainer,backgroundColor:btnColor}}>
                <MaterialIcons
                    name="update"
                    style={styles.updateDeleteText}
                />
                </View>
            </TouchableOpacity>

            {/*----------------------Remove Item------------------ */}
            
                <TouchableOpacity onPress={props.onPressDelete}>
                <View style={styles.deleteIconContainer}>
                <AntDesign name="minus" style={styles.updateDeleteText} />
                </View>
                </TouchableOpacity>

            </View>

            </View>
  </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    scrollviewDataView:{
        flexDirection:"row",
        width:"90%",
        // backgroundColor: "black",
    },
    scrollviewIndexView: {
        backgroundColor: "grey",
        width: "10%",
        // height:"50%",
        alignItems: "center",
        borderRadius: 50,
        justifyContent: "center",
      },
      scrollviewIndexText: {
        fontSize: 20,
        color: "white",
      },
      scrollviewIndexAndData:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:"70%",
      },
      updateDeleteButtonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"27%",
      },
      updateIconContainer: {
        // backgroundColor: "#13517e",
        borderRadius: 50,
        padding: 5,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
      },
      deleteIconContainer: {
        backgroundColor: "#c64c42",
        borderRadius: 50,
        padding: 5,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
      },
      updateDeleteText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
      },
      scrollviewText: {
        fontSize: 22,
        color: "white",
        paddingLeft: 15,
      },
      scrollviewItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#446d8b",
        alignSelf: "center",
        padding: 10,
        margin: 5,
        width: "90%",
        borderRadius: 10,
      },
});

export default ScrollViewItem;