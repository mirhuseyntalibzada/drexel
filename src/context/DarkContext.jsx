import { useEffect, useState, createContext } from "react";

export const DarkContext = createContext();

export const DarkProvider = ({children}) => {

    const [mode, setMode] = useState(localStorage.getItem("mode"))

    useEffect(()=>{
        if(localStorage.getItem("mode")===null){
            localStorage.setItem("mode","dark")
        }
    },[])

    return(
        <DarkContext.Provider value={[mode, setMode]}>
            {children}
        </DarkContext.Provider>
    )

}