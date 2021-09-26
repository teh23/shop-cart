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


function App() {

    const { data, error } = useSWR<string[]>('https://fakestoreapi.com/products/categories', fetcher)
    if (!data) return <>loading</>

    return (
        <>
            <BrowserRouter>
                {data.map((category, idx) => {
                    return (
                        <Link to={category} key={idx} >{category} </Link>
                    )
                })}
                <Route path='/:category' component={Category} />
            </BrowserRouter>
        </>
    )

}



export default App;
