import axios from "axios";
import React, { createContext, FormEvent, useContext, useReducer, useState } from "react";
import useSWR from "swr";
import {
    BrowserRouter,
    Route,
    Link
} from "react-router-dom";
import Category from "./components/Category";
import { fetcher } from "./lib/fetcher";
import Header from "./components/Header";
import Product, { IProduct } from "./components/Product";


interface ICard {
    product: IProduct
    count: number

}

interface IAction {
    type: "ADD",
    payload: {
        product: IProduct
        count: number
    }
}
interface ctx {
    card: ICard[],
    dispatch: React.Dispatch<IAction>
}

const cardCtx = createContext<ctx>({ card: [], dispatch: () => [] })

function App() {


    const [card, dispatch] = useReducer((state: ICard[], action: IAction) => {
        switch (action.type) {
            case 'ADD':
                if (state.find(({ product }) => product.id === action.payload.product.id)) {

                    return [...state.map((val) => {
                        if (val.product.id === action.payload.product.id) {
                            console.log(val)
                            val.count++

                        }
                        return val

                    })]
                }
                return [...state, { product: action.payload.product, count: action.payload.count }]
            default:
                return []
        }
    }, [])

    const { data, error } = useSWR<string[]>('https://fakestoreapi.com/products/categories', fetcher)
    if (!data) return <>loading</>
    console.log(card)
    return (
        <>
            <cardCtx.Provider value={{ card, dispatch }}>
                <BrowserRouter>
                    <Header>
                        {data.map((category, idx) => {
                            return (
                                <Link className={` border-b sm:p-2`} to={category} key={idx} >{category} </Link>
                            )
                        })}
                    </Header>

                    <Route path='/:category' component={Category} />
                </BrowserRouter>
                asd
            </cardCtx.Provider >
        </>
    )

}

export const useCard = () => useContext(cardCtx)

export default App;
