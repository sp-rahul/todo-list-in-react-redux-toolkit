import TodoApp from "./pages/TodoApp";
import MyNewPage from "./pages/MyNewPage";
import Quote from "./components/fetch/Quote";
import Quotes from "./components/axios/Quotes";
import QuoteSwr from "./components/swr/QuoteSwr";
import { Suspense } from "react";
import QuoteQuery from "./components/query/QuoteQuery";
import Todos from "./redux/Todos";
import AddTodoForm from "./redux/AddTodoForm";

// only for quote query
import { QueryClient, QueryClientProvider } from "react-query";

function App() {

  // // for only quoteQuery 
  // const client = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       suspense: true,
  //     }
  //   }
  // })

  return (
    <div style={{color: "green", margin:"50px"}}>
      
      <Todos />


      {/* <MyNewPage /> */}
      {/* <Quotes/> */}
      {/* <Suspense fallback={<h1>Data is loading</h1>}>
         <QuoteSwr/>
       </Suspense> */}

      

       {/* <QueryClientProvider client={client}>
          <Suspense fallback={<h1>Loading the data.....</h1>}>
                  <QuoteQuery/>
                   Here others QuoreQuery is using the cached data  
                  <QuoteQuery/>
                  <QuoteQuery/>
            </Suspense>
       </QueryClientProvider> */}
      

    </div>
  );
}


export default App;



