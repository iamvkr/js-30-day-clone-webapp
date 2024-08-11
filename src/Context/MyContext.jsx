import { createContext, useState } from 'react';

export const MyContext = createContext("");

const Provider =({children})=> {
    // new Array(30).fill(null).map((obj,i)=> ({[i]:false}))
    const [completedIndx, setcompletedIndx] = useState(JSON.parse(localStorage.getItem("savedCompletedStatus")) || new Array(30).fill(false));
    return <MyContext.Provider value={{completedIndx,setcompletedIndx}}>{children}</MyContext.Provider>
}
export default Provider;