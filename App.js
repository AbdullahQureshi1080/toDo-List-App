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

// import CustomButton from "./components/ButtonComponent";
import InputAddView from "./components/InputAddComponent";
import ScrollViewItem from "./components/ScrollViewItemComponent";

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
        return l.key === item.key;
      });
      const updateItem = { ...this.state.List[updateItemIndex] };
      updateItem.data = this.state.text;
      const updatedItemList = [...this.state.List];
      updatedItemList[updateItemIndex] = updateItem;
      this.setState({ text: "", List: updatedItemList });
    }
  };

  // disableAddButton = () => {

  // };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>My List</Text>
          <InputAddView
            placeholder="Enter toDo"
            changeText={this.handleInput}
            valueText={this.state.text}
            addItemProp={this.addItem}
          />
          <View>
            <Text style={{ fontSize: 26 }}>{this.state.text}</Text>
          </View>

          {/*----------------------Scroll View------------------ */}

          <ScrollView style={styles.scrollview}>
            {this.state.List.map((item, index) => (
              <ScrollViewItem
                key={item.key}
                activeOpacity={0.4}
                onPress={() => {
                  this.setState({ text: item.data });
                }}
                itemData={item.data}
                indexData={index + 1}
                onPressUpdate={() => this.updateItem(item)}
                onPressDelete={() => this.removeItem()}
              />
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
  },
  scrollviewIndexText: {
    fontSize: 20,
    color: "white",
  },
  scrollviewIndexAndData: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "70%",
  },
  updateDeleteButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
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
});

export default App;
