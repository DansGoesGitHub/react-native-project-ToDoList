import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  Alert,
  FlatList,
} from 'react-native';
import Task from './components/Task';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App(){
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task == null){
        Alert.alert("Please input text");
    }
    else {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask(null);
    }
    
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerNav}>
        {/* <Button title="Edit" color="#FFE00A" style={styles.buttondesign}/> */}
        <Text style={styles.sectionTitleNav}>TO DO LIST</Text>
        {/* <Button title="Categories" color="#FFE00A" style={styles.buttondesign}/> */}
      </View>
      {/*Today's Taks*/ }
     <SafeAreaView>
     <ScrollView>
     <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TODAY </Text>
        <View style={styles.item}>
          {/*this is where the tasks will go!*/}
          {
            taskItems.map((item, index) => {
              return (
                <View style={styles.taskContainerWithButton}>
                  <Task text={item} />
                  <TouchableOpacity style={styles.buttondesign} key={index} onPress={() => completeTask(index)}>
                   <Text style={styles.buttondesigntext}>Delete</Text>
                  </TouchableOpacity>
                </View>
               
              )
            })
            // taskItems.map((item, index) => {
            //   return <Task text={item} />
            // })
          }
        </View>
      </View>
     </ScrollView>
     </SafeAreaView>
    <KeyboardAvoidingView behavior={Platform.OS === "ios"?"padding":"height"} style={styles.writeTaskWrapper}>
      <TextInput style = {styles.input} placeholder="Write task" value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style = {styles.addWrapper}>
          <Text style = {styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  containerNav: {
    // flex: 1,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFE00A',
    alignItems: 'center',
    height: 'auto',
  },
  buttondesign: {   
    height: 24,
    width: 50,
    alignItems: 'center',
    backgroundColor: '#FF6060',
  },
  buttondesigntext: {
    color: 'white',
  },
  taskContainerWithButton: {
    backgroundColor: '#FF6060',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  tasksWrapper: {
    // paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitleNav: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#101010',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#101010',
  },
  item: {},
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    color: '#101010',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#2869f7',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    
  },
  addText: {
    color: 'white',
  },
});