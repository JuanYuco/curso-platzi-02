import React from "react";
import { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import './TodoForm.css';

export const TodoForm = () => {
    const { addTodo, setOpenModal } = useContext(TodoContext);
    const [ textTodo, setTextTodo ] = useState('');

    const onCancel = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    const onSave = (e) => {
        e.preventDefault();
        addTodo(textTodo);
        setOpenModal(false);
    }

    const handleTextChange = (e) => {
        setTextTodo( e.target.value );
    }

    return (
        <form onSubmit={ onSave }>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Escriba la descripción de la tarea"
                value={ textTodo }
                onChange={ handleTextChange }
            >
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    onClick={ onCancel }
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Guardar
                </button>
            </div>
        </form>
    );
}