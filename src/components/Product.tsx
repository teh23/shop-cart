import React from 'react'

export interface IProduct {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    },
    title: string
}


const Product = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
}: IProduct) => {
    console.log(title)
    return (
        <div className={`rounded-xl shadow-lg bg-gray-400 p-5 sm:w-1/6 space-y-4 flex flex-col`}>
            {category}
            <img className={``} src={image} alt="title" />
            <p className="font-bold">{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <div className={`flex justify-between items-center`}>
                <p>{rating.count}/{rating.rate}</p>
                <button className={`bg-gray-100 rounded p-2 shadow font-bold text-sm `}>ADD</button>
            </div>

        </div>
    )
}

export default Product
