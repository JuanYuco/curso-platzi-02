import React from 'react';
import { AppUi } from './components/AppUi/AppUi';
import { TodoProvider } from './Context/TodoContext';

export const App = () => {
	return (
		<TodoProvider>
			<AppUi />
		</TodoProvider>
	);
}