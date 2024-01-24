/**
 * @fileoverview Main component of the application.
 * @author <AlArcoMU>
 */

import { StyleSheet, Text, TextInput, View, Button,FlatList} from 'react-native';
import { useState } from 'react';

/**
 * Main component of the application.
 */
export default function App() {
  //Declaramos el hook de estado de componente "newGoal"
  const [newGoal, setNewGoal] = useState("");
  const [listGoals, setListGoals] = useState([]);

  /**
   * Event handler for when the user enters text into the text input field.
   * @param {string} enteredText - The text that was entered into the text input field.
   */
  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
  }

  /**
   * Event handler for when the user presses the "Add Goal" button.
   */
  function addGoalHandler() {
    setListGoals(myCurremtGoals => [...myCurremtGoals, newGoal]);
  }

  return (
    <View style={style.container}>
      <View style={style.InputContainer}>
        <TextInput
          onChangeText={textChangeHandler}
          style={style.TextInput}
          placeholder='Input your Goal' />
        <Button
          title="Add Goal"
          onPress={addGoalHandler} />
      </View>
      <View style={style.goalsContainer}>
        <FlatList
        data={listGoals} 
        renderItem ={
          ({item}) => (
            <View style={style.goalCard} key={item}>
              <Text style={style.goalText}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

/**
 * StyleSheet for the main component.
 */
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  InputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 2,
    alignItems: 'center',
    borderBottomColor: "grey",
    padding: 4,
  },
  TextInput: {
    borderColor: "grey",
    borderWidth: 2,
    padding: 8,
    width: "70%",
    height: 40,
  },
  goalsContainer: {
    flex: 4,
  },
  goalCard:{
    padding:20,
    backgroundColor: "#f0554a",
    marginTop: 10,
    marginBottom: 10, 
    borderRadius: 18,
  },
  goalText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center',
  }
});