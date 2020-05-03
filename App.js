import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

import CustomButton from "./components/ButtonComponent";

class App extends Component {
  state = {
    text: "",
    List: [],
  };

  handleInput = (text) => {
    this.setState({ text: text });
  };

  addItem = () => {
    if (this.state.text === "") {
      alert("Cannot add Nothing");
    } else {
      const newList = [...this.state.List];
      newList.push({ key: Math.random().toString(), data: this.state.text });
      this.setState({ text: "", List: newList });
    }
  };

  removeItem = (itemKey) => {
    const updatedList = [...this.state.List];
    updatedList.splice(itemKey, 1);
    this.setState({ List: updatedList });
  };

  updateItem = (item) => {
    if (this.state.text === item.data || this.state.text === "") {
      alert(" Nothing to Update");
    } else {
      const updateItemIndex = this.state.List.findIndex((l) => {
        // console.log(l.key);
        // console.log(item.key);
        // console.log(l.key === item.key);
        return l.key === item.key;
      });
      const updateItem = { ...this.state.List[updateItemIndex] };
      updateItem.data = this.state.text;
      // console.log(updateItem);
      const updatedItemList = [...this.state.List];
      updatedItemList[updateItemIndex] = updateItem;
      this.setState({ text: "", List: updatedItemList });
      // console.log(updatedItemList);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

        <View style={styles.container}>
          <Text style={styles.title}>My List</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter toDo"
              onChangeText={this.handleInput}
              value={this.state.text}
            />
            <CustomButton name="add-to-list" addEvent={this.addItem} />
          </View>

          <View>
            <Text style={{ fontSize: 26 }}>{this.state.text}</Text>
          </View>

{/*----------------------Scroll Views------------------ */}

          <ScrollView style={styles.scrollview}>
            {this.state.List.map((item, index) => (
              <TouchableOpacity
                key={item.key}
                activeOpacity={0.4}
                onPressIn={() => {
                  this.setState({ text: item.data });
                }}
              >
          {/*----------------------Scroll View Item ------------------ */}      

                <View style={styles.scrollviewItem}>

                  <View style={styles.scrollviewIndexAndData}>
                      <View style={styles.scrollviewIndexView}>
                        <Text style={styles.scrollviewIndexText}>{index + 1}</Text>
                      </View>
                      <Text style={styles.scrollviewText}>{item.data}</Text>
                  </View>
                  

                  <View style={styles.updateDeleteButtonContainer}>
                    
                     {/*----------------------Update Item------------------ */}

                  <TouchableOpacity onPress={() => this.updateItem(item)}>
                    <View style={styles.updateIconContainer}>
                      <MaterialIcons
                        name="update"
                        style={styles.updateDeleteText}
                      />
                    </View>
                  </TouchableOpacity>

                   {/*----------------------Remove Item------------------ */}
                   
                     <TouchableOpacity onPress={() => this.removeItem()}>
                    <View style={styles.deleteIconContainer}>
                      <AntDesign name="minus" style={styles.updateDeleteText} />
                    </View>
                     </TouchableOpacity>

                  </View>

                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
   scrollviewIndexView: {
    backgroundColor: "grey",
    width: "10%",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    // paddingLeft:20,
    // marginLeft:40,
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
    width:"30%",
  },
  updateIconContainer: {
    backgroundColor: "#13517e",
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
    fontSize: 26,
    color: "white",
    paddingLeft: 15,
  },
  scrollview: {
    paddingTop: 20,
    width: "100%",
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
  title: {
    fontSize: 64,
    color: "#0d5280",
  },
  container: {
    flex: 1,
    backgroundColor: "#e8b524",
    alignItems: "center",
    paddingTop: 40,
  },
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

export default App;
