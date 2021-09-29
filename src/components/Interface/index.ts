export interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

export interface ICard {
    product: IProduct;
    count: number;
}
export interface IAction {
    type: "ADD" | "REMOVE" | "CHANGE";
    payload: {
        product: IProduct;
        count: number;
    };
}
export interface ctx {
    card: ICard[];
    dispatch: React.Dispatch<IAction>;
}
