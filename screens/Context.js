import {  createContext, useState } from "react";

export const MovieCards=createContext();

 export const MovieContext= ({children})=>{

    const [seats,setSeates]=useState([])
    return(
        <MovieCards.Provider value={{seats,setSeates}}>
            {children}
        </MovieCards.Provider>
    )
}