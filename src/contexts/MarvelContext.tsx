import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../pages/api/api";

type MarvelData = {

    id:string,
    name:string,
    series: { items: { name: string }[] },
    stories: { 
      items: { 
        name: string
      }[]
     },
    description:string,
    thumbnail:{
      path:string,
      extension:string
    }
  }
  type MarvelContextType={
    chars: MarvelData[] 

  }
  type MarvelContextProviderProps = {
    children: ReactNode;
  }

export const MarvelContext =  createContext({}as MarvelContextType)

export function MarvelProvider(props:MarvelContextProviderProps) {

    const [chars,setChars] = useState<MarvelData[]>([])

    useEffect(()=>{
  
      api.get('/characters')
      .then(response => {
        console.log(response.data.data.results)

        setChars(response.data.data.results)

        console.log('Chamando state',chars)
  
      })
      .catch(err => console.log(err))
  
    },[])
    
    return(
        <MarvelContext.Provider value={{chars}}>
            {props.children}
        </MarvelContext.Provider>
    )
  
}