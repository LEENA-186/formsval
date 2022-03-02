import React, {createContext, useState} from 'react' 

export const data = createContext();
export const Info = (props) =>{
    const [account,setAccount]= useState([]);
    return (
     <>
     <data.Provider value={{account,setAccount}}>
         {props.children}
     </data.Provider>
     </>
    );
} 
