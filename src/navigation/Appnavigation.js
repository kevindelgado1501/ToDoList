import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from '../components/TaskList';  
import TaskForm from '../components/TaskForm';  
  
const Stack = createStackNavigator();

const Appnavigation = () => {
    return (
       
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="TaskList" 
                        component={TaskList}  
                    />
                    <Stack.Screen 
                        name="TaskForm" 
                        component={TaskForm}  
                    />
                </Stack.Navigator>
            </NavigationContainer>
       
    );
};

export default Appnavigation;
