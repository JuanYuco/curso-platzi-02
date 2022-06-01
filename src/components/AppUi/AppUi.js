import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { TodoForm } from "../Form/TodoForm";
import { Modal } from "../Modal/Modal";
import { TodoItem } from "../Todo/TodoItem";
import { TodoList } from "../Todo/TodoList";
import { TodoButton } from "../TodoButton/TodoButton";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";

export const AppUi = () => {
	const { filterTodos, totalTodos, loading, error, completeTodo, deleteTodo, openModal, setOpenModal } = useContext( TodoContext );
    return (
        <>
            <TodoCounter />
			<TodoSearch />
			<TodoList>
				{ loading && <p>Cargando...</p> }
				{ ( !loading && error ) && <p>Ha ocurrido un error</p> }
				{ ( !loading && totalTodos === 0 ) && <p>Crea tu primer TODO</p> }
				{
					filterTodos.map( ( { text, completed } ) => (
						<TodoItem 
							key={ text } 
							text={ text } 
							completed={ completed }
							onComplete={ () => completeTodo( text ) }
							onDelete={ () => deleteTodo( text ) }
						/>
					))
				}
			</TodoList>
			{ !!openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			) }
			<TodoButton setOpenModal={ setOpenModal } />
        </>
    );
}