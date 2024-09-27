import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TaskContext from '../context/TaskContext';

const TaskForm = ({ route, navigation }) => {
    const { state, dispatch } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    
    const task = route.params ? route.params.task : null;

  
    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task]);

    
    const handleSave = () => {
        if (task) {
           
            dispatch({
                type: 'UPDATE_TASK',
                payload: { id: task.id, title, description }
            });
        } else {
           
            dispatch({
                type: 'ADD_TASK',
                payload: { id: Date.now().toString(), title, description }
            });
        }

        
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Título:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Escribe el título de la tarea"
            />
            
            <Text style={styles.label}>Descripción:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Escribe la descripción de la tarea"
                multiline
            />
            
            <Button
                title={task ? 'Actualizar Tarea' : 'Agregar Tarea'}
                onPress={handleSave}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 16,
    },
});

export default TaskForm;

