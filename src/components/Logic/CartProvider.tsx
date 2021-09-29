import React, { createContext, useContext, useReducer } from 'react'
import { ctx } from '../Interface'
import Reducer from './Reducer'

const cartCtx = createContext<ctx>({ card: [], dispatch: () => [] })



const CartProvider: React.FunctionComponent<{
    children: React.ReactNode
}> = ({ children }) => {
    const [card, dispatch] = useReducer(Reducer, [])

    return (
        <cartCtx.Provider value={{ card, dispatch }}>
            {children}
        </cartCtx.Provider>
    )
}

export default CartProvider
export const useCart = () => useContext(cartCtx)