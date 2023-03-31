import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  // managing modalIsVisible state 
  const [modalIsVisible, setModalIsVisible] = useState(false)

  // managing courseGoals array
  const [courseGoals, setCourseGoals] = useState([]);

  // updates modalIsVisible state to true
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  // updates modalIsVisible state to false
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  // adds previous state and input into a new array
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }
    ]);
  
  // updates modalIsVisible state to false
    endAddGoalHandler();
  }

  // filters previous state to return a new array w/o the goal.id passed into it
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
  }



  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>

        {/* connected button to startAddGoalHandler */}

        <Button
          title='Add New Goal'
          color='#8065ac'
          onPress={startAddGoalHandler}
        />

        {/* passing addGoalHandler, endAddGoalHandler, and modalIsVisible to GoalInput */}
  
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />

        {/* for each item in our courseGoals array we render GoalItem */}
        {/* Passing text, onDelete, and id to each GoalItem */}

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return (
                item.id
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});
