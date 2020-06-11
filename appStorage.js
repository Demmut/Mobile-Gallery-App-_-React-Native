import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Gallery from './components/galleryView'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Cook breakfast', key: '1'},
    {text: 'Make coffee', key: '2'},
    {text: 'Chill', key: '3'},
    {text: 'Study', key: '4'},
    {text: 'Workout', key: '5'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  }

  const submitHandler = (text) => {
    if(text.length > 0)
    {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos]
      })
    } else {
      Alert.alert('Oops', 'You can not add an empty todo', [
        {text: 'Understood', onPress: () => console.log('Alert closed.')}
      ])
    }
  }
  

  return (
    /*<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>*/
    
    <Gallery />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
