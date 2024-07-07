import { getCurrentUser } from "@/db/apiAuth"
import { createContext, useContext, useEffect } from "react"

const urlContext = createContext()

const UrlProvider = ({children})=>{
    const {data:user,loading,fn:fetchuser} = useEffect(getCurrentUser);
    const isAunthenticated = user?.role == "authticated";
    useEffect(()=>{
        fetchuser();
    },[]);
    return <urlContext.Provider  value={{user,fetchuser,loading,isAunthenticated}}>
        {children}
    </urlContext.Provider>
}

export const UrlStatae = () => {
 return useContext(urlContext);
}


export default UrlProvider;