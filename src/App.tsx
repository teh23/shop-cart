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


function App() {


    //const [card, dispatch] = useReducer(reducer, initialState)
    const { data, error } = useSWR<string[]>('https://fakestoreapi.com/products/categories', fetcher)
    if (!data) return <>loading</>

    return (
        <>
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
        </>
    )

}



export default App;
