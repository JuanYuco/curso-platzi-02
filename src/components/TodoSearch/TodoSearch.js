import React, { useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoSearch.css';

export const TodoSearch = () => {
	const { search, setSearch } = useContext( TodoContext );
	const onSearch = (e) => {
		setSearch( e.target.value );
	}

	return (
		<input 
			className="TodoSearch"
			placeholder="Buscar"
			value={ search }
			onChange={ onSearch }
		/>
  	)
}
