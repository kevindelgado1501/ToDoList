import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';

const TaskFormScreen = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {route.params && route.params.task ? 'Editar Tarea' : 'Agregar Tarea'}
            </Text>
           
            <TaskForm route={route} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default TaskFormScreen;
