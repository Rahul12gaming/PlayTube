import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";


export const DataContext=createContext();
export const AppData=({children})=>{
    const [loading,setLoading]=useState("loading");
    const [searchResults,setSearchResults]=useState(null);
    const [category,setCategory]=useState("New");
    const [theme,setTheme]=useState(null);
    const [error,setError]=useState(false)
    const [mobileView,setMobileView]=useState(false);
    const [results,setResult]=useState();
    
    useEffect(()=>{
        fetchCategoryData(category)
    },[category])
    const fetchCategoryData=async(query)=>{
        
       
            setLoading(true)
            const data=await fetchDataFromApi(`search/?q=${query}`);
            if(!data.contents)
            {
                 setError(true)
            }
          
            
            setResult(data.contents);
        
            setLoading(false);
            setError(false)


    }
    useEffect(()=>{
        if(window.matchMedia("(prefers-color-scheme:dark)").matches){
            setTheme("dark");
        }
        else
        {
            setTheme("light")
        }
    },[])
    useEffect(()=>{
            theme==='dark'?document.getElementById('root').classList.add('dark')
           
            :document.getElementById('root').classList.remove('dark')
    },[theme])
    return(
        <DataContext.Provider
        value={{
            loading,
            setLoading,
            category,
            setCategory,
            theme,
            setTheme,
            mobileView,
            setMobileView,
            searchResults,
            setSearchResults,
            results,
            error
        }}>
            {children}
        </DataContext.Provider>
    )
}