
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.InputContainer}>
        <TextInput
          style={style.TextInput}
          placeholder='Input your Goal' />
        <Button title="Add Goal" />
      </View>
      <View style={style.goalsContainer}>
        <Text>Your list of goals</Text>
      </View>
    </View>
  );
}
const style = new StyleSheet.create({
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
  TextInput:{
    borderColor:"grey",
    borderWidth: 2,
    padding: 8,
    width: "70%",
    height: 40,
  },
  goalsContainer: {
    flex:4,
  }

})
