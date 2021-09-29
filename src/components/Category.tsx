import React from 'react'
import { RouteComponentProps } from 'react-router'
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'
import { IProduct } from './Interface'
import Product from './Product'

interface IParams {
    category: string
}


const Category = ({ match }: RouteComponentProps<IParams>) => {
    const category = match.params.category

    const { data } = useSWR(`https://fakestoreapi.com/products/category/${category}`, fetcher)
    if (!data) return <p>loading</p>

    return (
        <div className={`container flex  mx-auto flex-wrap`}>
            {data.map((product: IProduct, idx: number) => {
                return (
                    <Product {...product} key={idx}></Product>
                )
            })}

        </div>
    )
}

export default Category
