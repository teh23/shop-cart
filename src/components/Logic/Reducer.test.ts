import { IProduct } from "./../Interface/index";
import React from "react";
import { render, screen } from "@testing-library/react";
import Reducer from "./Reducer";

const product: IProduct[] = [
    {
        id: 1,
        category: "eletronics",
        description: "description",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        price: 123,
        rating: { rate: 4, count: 123 },
        title: "item",
    },
];

describe("testing reducer", () => {
    it("add case", () => {
        const reducer = Reducer([], {
            type: "ADD",
            payload: {
                product: product[0],
                count: 1,
            },
        });
        expect(reducer).toStrictEqual([{ count: 1, product: product[0] }]);
    });
});
