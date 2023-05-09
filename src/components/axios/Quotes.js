// import DisabledContext from "antd/es/config-provider/DisabledContext";

import { useEffect, useState } from "react"
import axios from "axios";

export default function Quotes(){
    const [quote, setQuote] = useState(null)

    useEffect(()=>{
        const fetchQuote = async()=>{
            const res = await axios.get('https://api.quotable.io/random')
            setQuote(res.data)

             }
             fetchQuote()


        },[]);

    return(
        <div>
            <h1> Hi this is from  Quote</h1>
            <div>{quote?.content}</div>
        </div>
    )
}