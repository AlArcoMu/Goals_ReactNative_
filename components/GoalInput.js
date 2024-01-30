import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal,Image } from 'react-native';

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
        <Image mage source={require('../img/julius.png')} style={styles.logo}>
        </Image>
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.textInput}
          value={newGoal}
          placeholder='Input your Goal!!'
        />
        <View style={styles.ViewButton}>
          <View style={styles.Button}>
            <Button
              color="#d61b11"
              title='Cancel'
              onPress={() => onCancel()}
            />
          </View>
          <View style={styles.Button}>
            <Button
              color="#3d517a"
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
    backgroundColor:"#8AC6BF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
    backgroundColor:"#f5f0f0",
    borderColor: "##01395C",
    borderWidth: 1,
    width: "70%",
    padding: 10
  },
  logo:{
    backgroundColor:"#8AC6BF",
    width: 500,
    height: 300,
    marginBottom:20
  }
})


