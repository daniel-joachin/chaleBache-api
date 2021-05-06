import react,{createContext, useState} from React;
export const BacheContext = createContext();
export const BacheProvider = ({children})=>{
    const  [bache, setbache] = useState({})
    return (<BacheContext.Provider value={{bache, setbache}}>
        {children}
    </BacheContext.Provider>)
    }