import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
// let diaDeHoje = 'Sexta'
const [diaDeHoje, setDiaDeHoje] = useState('Sexta')

    return(
        <GlobalContext.Provider value={{usuarioLogado, diaDeHoje, setDiaDeHoje}}>
            {children}
        </GlobalContext.Provider>
    )
}
