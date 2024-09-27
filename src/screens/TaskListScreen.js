import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import TaskContext from "../context/TaskContext";
import TaskList from "../components/TaskList";

const TaskListScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(TaskContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={state.task}
                renderItem={({ item }) => (
                    <TaskList
                        task={item}
                        onDelete={() => dispatch({ type: 'DELETE_TASK', payload: item.id })}
                        onEdit={() => navigation.navigate('TaskForm', { task: item })}
                    />
                )}
                keyExtractor={task => task.id.toString()}
            />
            <Button
                title="Agregar Tarea"
                onPress={() => navigation.navigate('TaskForm')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});

export default TaskListScreen;
