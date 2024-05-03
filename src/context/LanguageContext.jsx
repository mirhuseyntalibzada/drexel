import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [lang, setLang] = useState(localStorage.getItem("lang"));
    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', "EN")
        }
    }, [])

    return (
        <LanguageContext.Provider value={[lang, setLang]}>
            {children}
        </LanguageContext.Provider>
    )
}