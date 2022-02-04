import { useContext } from "react";
import { MarvelContext } from "../contexts/MarvelContext";

export function useMarvel(){
    
    const value = useContext(MarvelContext)
    
    return value;
}