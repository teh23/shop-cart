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

export interface ICart {
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
    card: ICart[];
    dispatch: React.Dispatch<IAction>;
}
