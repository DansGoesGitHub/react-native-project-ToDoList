
import React from 'react';
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
} from 'react-native';
import Task from './components/Task';


    <View style={styles.container}>
      <View style={styles.containerNav}>
        <Button title="Edit" color="#FFE00A" style={styles.buttondesign}/>
        <Text>TO DO LIST</Text>
        <Button title="Categories" color="#FFE00A" style={styles.buttondesign}/>
      </View>
      
      {/* CATEGORIES */}

      const ViewStyleProps = () => {
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.middle} />
        <View style={styles.bottom} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
    </View>


const styles = StyleSheet.create({
  containerNav: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: '#FFE00A',
    // paddingHorizontal: 25,
    // paddingVertical: 10,
    alignItems: 'center',
  },
  buttondesign: {   
    textAlign: 'center',
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  tasksWrapper: {
    // paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {},
});

export default ViewStyleProps;
