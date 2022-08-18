import React, { useContext, useReducer, useEffect } from 'react'

import { items as cartItems } from './data'
import { reducer } from './reducer'

const AppContext = React.createContext()

const initialState = {
    carts: cartItems,
    total: 0,
    amount: 0,
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }
    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }
    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }
    const displayItems = () => {
        dispatch({
            type: 'DISPLAY_ITEMS',
            payload: cartItems,
        })
    }

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.carts])

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease,
                displayItems,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }
