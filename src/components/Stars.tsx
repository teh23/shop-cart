import React from 'react'
import { FaStar } from "react-icons/fa";

const Stars: React.FunctionComponent<{
    rating: number
}>
    = ({ rating }) => {

        return (
            <div className={`flex items-center`}>
                <p>{rating}</p>
                <FaStar className={`text-yellow-400`} />
                <FaStar className={`text-yellow-400`} />
                <FaStar className={`text-yellow-400`} />
                <FaStar className={`text-yellow-400`} />
                <FaStar className={`text-gray-400`} />
            </div>
        )
    }

export default Stars
