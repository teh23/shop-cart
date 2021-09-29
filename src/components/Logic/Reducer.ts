import { IAction, ICart } from "../Interface";

const Reducer = (state: ICart[], action: IAction) => {
    switch (action.type) {
        case "ADD":
            if (
                state.find(
                    ({ product }) => product.id === action.payload.product.id
                )
            ) {
                return [
                    ...state.map((val) => {
                        if (val.product.id === action.payload.product.id) {
                            val.count++;
                        }
                        return val;
                    }),
                ];
            }
            return [
                ...state,
                {
                    product: action.payload.product,
                    count: action.payload.count,
                },
            ];
        case "REMOVE":
            return [
                ...state.filter(
                    ({ product }) => product.id !== action.payload.product.id
                ),
            ];
        case "CHANGE":
            return [
                ...state.map((val) => {
                    if (val.product.id === action.payload.product.id) {
                        val.count = action.payload.count;
                    }
                    return val;
                }),
            ];

        default:
            return [];
    }
};

export default Reducer;
