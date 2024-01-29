import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';


export default function App() {
  // declaramos el hook de estado de componente "newGoal"
  const [myGoals, setMyGoals] = useState([]);

  function addGoalHandler(newGoalText) {
    setMyGoals(myCurrentGoals => [...myCurrentGoals,
    {
      id: Date.now(),
      text: newGoalText,
    }]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onNewGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <View style={styles.goalItem} key={dataItem.item.id}>
              <Text style={styles.goalText}>{dataItem.item.text}</Text>
            </View>
          )
          }
        />
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "70%",
    padding: 10
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 20,
    backgroundColor: "#092FE0",
    marginBottom: 10,
    borderRadius: 12,
  },
  goalText: {
    color: "white"
  }


})


