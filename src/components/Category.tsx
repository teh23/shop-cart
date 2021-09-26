import React from 'react'
import { RouteComponentProps } from 'react-router'

interface IParams {
    category: string
}


const Category = ({ match }: RouteComponentProps<IParams>) => {
    console.log(match.params.category)
    return (
        <div>
            test
        </div>
    )
}

export default Category
