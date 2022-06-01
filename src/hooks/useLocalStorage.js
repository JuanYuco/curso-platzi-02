import { useEffect, useState } from "react";

export const useLocalStorage = ( itemName, initialValue ) => {
    const [ itemState, setItem ] = useState({
        item: initialValue,
        loading: true,
        error: null
    });

    const { item, loading, error } = itemState;
    useEffect( () => {
        setTimeout( () => {
            try {
                const localStorageItem = JSON.parse( localStorage.getItem( itemName ) ) || initialValue;
                setItem( (state) => ({
                    ...state,
                    item: localStorageItem,
                    loading: false
                }));
            } catch ( error ) {
                setItem( (state) => ({
                    ...state,
                    loading: false,
                    error
                }));
            }
        }, 1000);
    }, [ initialValue, setItem, itemName ]);

    const saveItem = ( newItem ) => {
		try {
            localStorage.setItem( itemName, JSON.stringify(newItem));
            setItem( (state) => ({
                ...state,
                item: newItem
            }));
        } catch ( error ) {
            setItem( (state) => ({
                ...state,
                error
            }));
        }
	}

    return {
        item,
        saveItem,
        loading,
        error
    };
}