import React from 'react'

import { ICard, IProduct } from './Interface'
import { useCard } from './Logic/CardProvider'


const Card = () => {
    const { card, dispatch } = useCard()


    const remove = (product: IProduct) => {
        dispatch({
            type: "REMOVE", payload: {
                product: product,
                count: 1
            }
        })
    }
    const changeCount = (product: ICard, e: React.ChangeEvent<HTMLInputElement>) => {

        dispatch({
            type: "CHANGE", payload: {
                product: product.product,
                count: Object.is(NaN, parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
            }
        })
    }
    return (
        <div>
            {card.map((product, idx) => {

                return (
                    <div key={idx} className={`flex space-x-2`}><input className={`w-10`} onChange={(e) => changeCount(product, e)} value={product.count} type="number"></input><p>x {product.product.title} </p><button onClick={() => remove(product.product)}>remove</button></div>
                )
            })}
        </div>
    )
}

export default Card
