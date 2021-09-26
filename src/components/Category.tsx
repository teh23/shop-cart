import React from 'react'
import { RouteComponentProps } from 'react-router'
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'
import Product, { IProduct } from './Product'

interface IParams {
    category: string
}


const Category = ({ match }: RouteComponentProps<IParams>) => {
    const category = match.params.category
    const { data, error } = useSWR(`https://fakestoreapi.com/products/category/${category}`, fetcher)
    if (!data) return <p>loading</p>
    console.log(data)
    return (
        <div className={`container flex  space-x-2 mx-auto`}>
            {data.map((product: IProduct, idx: number) => {
                return (
                    <Product {...product} key={idx}></Product>
                )
            })}

        </div>
    )
}

export default Category
