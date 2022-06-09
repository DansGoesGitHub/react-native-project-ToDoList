
import React, { Component, useState } from 'react';
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
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
// import App from '../App';
// create function here
const Task = (props) => {

    // const [taskItems, setTaskItems] = useState([]);

    // const completeTask = (index) => {
    //     let itemsCopy = [...taskItems];
    //     itemsCopy.splice(index, 1);
    //     setTaskItems(itemsCopy);
    //   }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                {/* <View style={styles.square}></View> */}
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FF6060',
        padding: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#BCE0FD',
        // opacity: 0.4,
        marginRight: 15,

    },
    itemText: {
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 10,
    },
    itemRight: {
        alignItems: 'flex-end',
        color: 'white',
    },
    // deleteButton: {
    //     width: 24,
    //     height: 24,
    //     backgroundColor: '#BCE0FD',
    //     alignItems: 'center',
    //     borderRadius: 50,
    //     backgroundColor: '#FF6060',
    //     // opacity: 0.4,
    // },
    // deleteButtonIcon: {
    //     color: 'white',
    // },
  });

  export default Task;