// import DisabledContext from "antd/es/config-provider/DisabledContext";

import useSWR from "swr"

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
}

export default function QuoteSwr(){
    const {data} = useSWR("https://api.quotable.io/random",
     fetcher, {
        suspense: true,
     })
console.log(data)


    return(
        <div>
            <h1> Hi this is from  Quote</h1>
            <div>{data.content}</div>
        </div>
    )
}