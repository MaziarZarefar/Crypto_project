import { useEffect, useState } from "react";

import { getCoinList } from "../../services/CryptoApi.js";
import TableCoin from "../modules/TableCoin.jsx";
import Pagination from "../modules/Pagination.jsx";
import Search from "../modules/Search.jsx";
import Chart from "../modules/Chart.jsx";


function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [currency , setCurrency] = useState("usd");
    const [chart , setChart] = useState(null);


    useEffect(() => {
        setIsLoading(true);
     const getData = async () => {
        try{const res = await fetch(getCoinList(page , currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false)
    } catch (error) {
          
    
        }
     };
     getData();
    }, [page , currency]);
    return (
        <div>
            <Search currency ={currency} setCurrency={setCurrency} />
            <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} />
            <Pagination page={page} setPage={setPage} />
            {!!chart && <Chart chart={chart} setChart={setChart} />}
            </div>
    )
}


export default HomePage;