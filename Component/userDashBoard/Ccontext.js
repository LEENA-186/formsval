import React, {createContext, useState} from 'react' 

export const info = createContext();
export const Loans = (props) =>{
    const [loan,setLoan]= useState([]);
    return (
     <>
     <info.Provider value={{loan,setLoan}}>
         {props.children}
     </info.Provider>
     </>
    );
} 
