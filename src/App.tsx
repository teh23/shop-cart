import React, { createContext, useContext, useReducer } from "react";
import useSWR from "swr";
import {
    HashRouter,
    Route,
    Link
} from "react-router-dom";
import Category from "./components/Category";
import { fetcher } from "./lib/fetcher";
import Header from "./components/Header";
import { IProduct } from "./components/Product";
import Card from "./components/Card";


export interface ICard {
    product: IProduct
    count: number

}

interface IAction {
    type: "ADD" | "REMOVE" | "CHANGE",
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

                            val.count++

                        }
                        return val

                    })]
                }
                return [...state, { product: action.payload.product, count: action.payload.count }]
            case 'REMOVE':
                return [...state.filter(({ product }) => product.id !== action.payload.product.id)]
            case 'CHANGE':

                return [...state.map((val) => {
                    if (val.product.id === action.payload.product.id) {
                        val.count = action.payload.count
                    }
                    return val

                })]

            default:
                return []
        }
    }, [])

    const { data } = useSWR<string[]>('https://fakestoreapi.com/products/categories', fetcher)
    if (!data) return <>loading</>

    return (
        <>
            <cardCtx.Provider value={{ card, dispatch }}>
                <HashRouter>
                    <Header>
                        {data.map((category, idx) => {
                            return (
                                <Link className={` border-b sm:p-2`} to={category} key={idx} >{category} </Link>
                            )
                        })}
                    </Header>

                    <Route path='/:category' component={Category} /> {/*temporary for production */}
                </HashRouter>
                <Card />
            </cardCtx.Provider >
        </>
    )

}

export const useCard = () => useContext(cardCtx)

export default App;
