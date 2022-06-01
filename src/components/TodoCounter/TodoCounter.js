import React from "react";
import './TodoCounter.css';
import { TodoContext } from '../../Context/TodoContext';
import { useContext } from 'react';

export const TodoCounter = () => {
    const { totalTodos, completedTodos } = useContext( TodoContext );
    return (
        <h2 className="TodoCounter">Has completado { completedTodos } de { totalTodos } TODO'S</h2>
    );
}