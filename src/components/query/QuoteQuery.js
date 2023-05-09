// import DisabledContext from "antd/es/config-provider/DisabledContext";

import { useQuery } from "react-query";

export default function QuoteQuery({quote}){
    
    const {data}= useQuery("quote", async ()=> {
        const res = await fetch("http://api.quotable.io/random")
        const data = await res.json();
        return data;

    })

    return(
        <div>
            <h1> Hi this is from  Quote</h1>
            <div>{data.content}</div>
        </div>
    )
}