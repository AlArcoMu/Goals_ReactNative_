import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  // declaramos el hook de estado de componente "newGoal"
  const [myGoals, setMyGoals] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);

  function addGoalHandler(newGoalText) {
    const currentDate = new Date();
    const options = { timeZone: 'Europe/Madrid' }; // Configura la zona horaria para España
    const formattedDate = currentDate.toLocaleTimeString('es-ES', options) + ' ' + currentDate.toLocaleDateString('es-ES', options);
    setMyGoals(myCurrentGoals => [...myCurrentGoals,
    {
      id: Date.now(),
      text: newGoalText,
      date: formattedDate
    }]);
  }
  function closeAddGoalHandler() {
    setmodalVisible(false);
  }
  function onDeleteGoalHandler(goalId) {
    setMyGoals(myCurrentGoals => myCurrentGoals.filter(goal => goal.id !== goalId));
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.container}>
      <Button
        color="#3d517a"
        title='Add new Goal'
        onPress={() => setmodalVisible(true)}
      />
      <GoalInput
        onNewGoal={addGoalHandler}
        onCancel={() => setmodalVisible(false)}
        visible={modalVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <GoalItem key={dataItem.item.id} goal={dataItem.item} onDeleteGoal={onDeleteGoalHandler} />
          )
          }
        />
      </View>
    </View>
    </>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15,
    backgroundColor: "#8AC6BF",
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 10,
  },
})


