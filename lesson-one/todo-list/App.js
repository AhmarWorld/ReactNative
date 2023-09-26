import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  FlatList,
} from "react-native";
import Task from "./components/Task";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([
    "awawdawdawdawdaw",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
    "awiufha jbcgfakh bv skj vgakeb",
  ]);

  const addTask = () => {
    if (textInput.trim() !== "") {
      setTasks([...tasks, textInput]);
      setTextInput("");
      Keyboard.dismiss();
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.heading}>Today's tasks</Text>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <Task taskText={item} />}
            keyExtractor={(i) => i}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "height"}
        >
          <View style={styles.bottom}>
            <TextInput
              style={[styles.textInput, !textInput && styles.centeredText]}
              placeholder="Write a Task"
              placeholderTextColor={"#c0c0c0"}
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={addTask}>
              <Icon name="add-sharp" size={32} color={"#c0c0c0"} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
  },
  top: {
    gap: 30,
  },
  bottom: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,

    position: "absolute",
    bottom: 36,
  },
  addButton: {
    backgroundColor: "#fff",
    borderRadius: 52,

    width: 60,
    height: 60,

    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 60,
    color: "black",

    paddingVertical: 15,
    paddingHorizontal: 20,

    width: "80%",
  },
  container: {
    paddingTop: 96,
    paddingHorizontal: 20,

    backgroundColor: "#E8EAED",
    height: "100%",
    width: "100%",

    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskContainer: {
    gap: 12,
  },
});
