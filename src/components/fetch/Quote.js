// import DisabledContext from "antd/es/config-provider/DisabledContext";

import { useEffect, useState } from "react"

export default function Quote(){
    const [quote, setQuote] = useState(null)

    useEffect(()=>{
        const fetchQuote = async()=>{
            const res = await fetch('https://api.quotable.io/random')
            const data = await res.json();
            setQuote(data)

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