import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("http://127.0.0.1:5500/src/data/shop.json")
    .then(res=>setData(res.data))
    .catch(error => console.error('Error fetching data:', error));
  }, [])

    return(
        <ProductContext.Provider value={[data, setData]}>
            {children}
        </ProductContext.Provider>
    )
}