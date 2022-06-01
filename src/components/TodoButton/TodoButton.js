import React from "react";
import './TodoButton.css';

export const TodoButton = ({ setOpenModal }) => {
    const onHandleClick = () => {
        setOpenModal( ( value ) => !value );
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={ onHandleClick }
        >
            +
        </button>
    );
}