import React, { createContext,useContext, useReducer } from "react";

const TaskContext = createContext();

const initialState = {
    task: [],
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('payload', action.payload);
            return { ...state, task: [...state.task, action.payload] };
        case 'UPDATE_TASK':
            if (!action.payload || !action.payload.id) return state;
            return {
                ...state,
                task: state.task.map(task =>
                    task.id === action.payload.id ? action.payload : task
                )
            };
        case 'DELETE_TASK':
            if (!action.payload) return state;
            return {
                ...state,
                task: state.task.filter(task => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    console.log('Estado Inicial del proveedor', state);
    
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
