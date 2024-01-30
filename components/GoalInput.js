import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

export default function GoalInput({ onNewGoal, visible, onCancel }) {
  const [newGoal, setNewGoal] = useState("");

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function onPressHandler() {
    if (newGoal) {
      onNewGoal(newGoal)
    }
    setNewGoal("");
  }

  return (
    <Modal
      animationType='slide'
      visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.textInput}
          value={newGoal}
          placeholder='Input your Goal!!'
        />
        <View style={styles.ViewButton}>
          <View style={styles.Button}>
            <Button
              title='Cancel'
              onPress={() => onCancel()}
            />
          </View>
          <View style={styles.Button}>
            <Button
              title='Add Goal'
              onPress={onPressHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = new StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    alignItems: 'center'
  },
  ViewButton: {
    flexDirection: "row",
    margin: 20
  },
  Button: {
    width:"30%",
    margin:20,
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "70%",
    padding: 10
  }
})


