import React from "react";
import { View, Text } from "react-native";
import Appnavigation from './src/navigation/Appnavigation';
import { TaskProvider } from "./src/context/TaskContext";


const App = () => {
  return (
    <> 
    <TaskProvider>
      <Appnavigation/>
    </TaskProvider>
    </>
  )
}

export default App