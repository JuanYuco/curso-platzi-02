import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const { item: todos, saveItem: saveTodos, error, loading } = useLocalStorage( 'TODOS_V1', [] );
	const [ openModal, setOpenModal ] = useState(false);
    const [ search, setSearch ] = useState('');

    const completedTodos = todos.filter( todo => !!todo.completed ).length;
	const totalTodos = todos.length;
	let filterTodos = todos;
	if ( search.length > 1 ) {
		filterTodos = todos.filter( ({text}) => text.toLowerCase().includes( search.toLowerCase() ) );
	}

	const completeTodo = ( todoText ) => {
		const newTodos = todos.map( todo => (  
			todo.text === todoText ? { ...todo, completed: true } : todo
		));

		saveTodos(newTodos);
	}

	const deleteTodo = ( todoText ) => {
		const newTodos = todos.filter( ({ text }) => text !== todoText );
		saveTodos(newTodos);
	}

	const addTodo = ( todoText ) => {
		const newTodos = [ ...todos, { text: todoText, completed: false } ];
		saveTodos( newTodos );
	}

    return (
        <TodoContext.Provider value={{
            totalTodos,
			completedTodos,
			search,
			setSearch,
			filterTodos,
			completeTodo,
			deleteTodo,
			error,
			loading,
			openModal,
			setOpenModal,
			addTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}