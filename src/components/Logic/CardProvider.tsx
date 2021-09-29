import React, { createContext, useContext, useReducer } from 'react'
import { ctx } from '../Interface'
import Reducer from './Reducer'

const cardCtx = createContext<ctx>({ card: [], dispatch: () => [] })



const CardProvider: React.FunctionComponent<{
    children: React.ReactNode
}> = ({ children }) => {
    const [card, dispatch] = useReducer(Reducer, [])

    return (
        <cardCtx.Provider value={{ card, dispatch }}>
            {children}
        </cardCtx.Provider>
    )
}

export default CardProvider
export const useCard = () => useContext(cardCtx)