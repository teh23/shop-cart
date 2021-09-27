import React from 'react'
import { useCard } from '../App'
import Stars from './Stars'

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
    const { dispatch } = useCard()
    const product = {
        id: id,
        category: category,
        description: description,
        image: image,
        price: price,
        rating: rating,
        title: title
    }
    const addToCard = () => {
        dispatch({
            type: "ADD", payload: {
                product: product,
                count: 1
            }
        })
    }

    return (
        <div className={`rounded-xl space-y-2 border-b p-2 sm:w-1/2 xl:w-1/3 h-40 flex justify-center`}>

            <img className={`w-32`} src={image} alt="title" />
            <div className={`flex flex-col p-2`}>
                {/*category*/}
                <p className="font-bold text-sm">{title}</p>
                {/* <p>{description}</p> */}
                <p className={`text-2xl font-bold`}>{price} zł</p>
                <div className={`flex justify-between items-end`}>
                    <div className={''}>{<Stars rating={rating.rate} />}<div className={`text-sm opacity-70`}>{rating.count} buyers</div></div>
                    <button onClick={addToCard} className={` border-b p-2 shadow font-bold text-sm text-gray-700`}>ADD TO CARD</button>
                </div>

            </div>

        </div>
    )
}

export default Product
