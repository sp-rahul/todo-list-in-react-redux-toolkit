

import React, {useState} from "react";

export default function MyNewPage(){
    const [todo, setTodo] = useState([])
    const [invalue, setInvalue] = useState('')

    const handleInput = (e)=>{
        setInvalue(e.target.value)
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(todo);
        setTodo([...todo, invalue])
    }
    React.useEffect(()=>{
        if (todo.length != 0){
        localStorage.setItem('data', JSON.stringify(todo));
        }
      },[todo])


    return (
        <div className="container mx-auto">
            <div>
            <form onSubmit={handleSubmit}>
            <div class="mb-6">
                <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Todos</label>
                <input onChange={handleInput} type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Bonnie Green" />
                <button type="submit" class="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

            </div>
            </form>
            </div>
            
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    id
                </th>
                <th scope="col" class="px-6 py-3">
                    todo
                </th>
            </tr>
        </thead>
        <tbody>
            {
                todo.map((e, index)=>{
                    return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index}
                </th>
                <td class="px-6 py-4">
                    {e}
                </td>
                
            </tr>)
                })
            }
            
            
        </tbody>
    </table>
</div>

        </div>
    )
}