import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import TaskContext from '../context/TaskContext';

const TaskList = ({ task, onDelete, onEdit }) => {
    
    if (!task || !task.title) {
        return null;
    }

    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <View style={styles.buttonContainer}>
                <Button title='EDITAR' onPress={onEdit} />
                <Button title='ELIMINAR' onPress={onDelete} color="red" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        margin: 10,
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default TaskList;
