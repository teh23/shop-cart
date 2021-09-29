import useSWR from "swr";
import {
    HashRouter,
    Route,
    Link
} from "react-router-dom";
import Category from "./components/Category";
import { fetcher } from "./lib/fetcher";
import Header from "./components/Header";
import Card from "./components/Cart";
import CardProvider from "./components/Logic/CartProvider";




function App() {


    const { data } = useSWR<string[]>('https://fakestoreapi.com/products/categories', fetcher)
    if (!data) return <>loading</>

    return (

        <CardProvider>
            <HashRouter>
                <Header>
                    {data.map((category, idx) => {
                        return (
                            <Link className={` border-b sm:p-2`} to={category} key={idx} >{category} </Link>
                        )
                    })}
                </Header>
                <Route path='/:category' component={Category} /> {/*temporary for production */}
            </HashRouter>
            <Card />
        </CardProvider>

    )

}



export default App;
