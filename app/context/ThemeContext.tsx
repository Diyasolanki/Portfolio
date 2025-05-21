"use client";

import {useState , createContext, useEffect  , useContext} from "react";

type Theme = "light" | "dark";
 interface ThemeContextType{
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children : React.ReactNode}) => {
    const [theme , setThemeState] = useState<Theme>("light");
    const[mounted , setMounted] = useState(false);

    //update the theme
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark" , newTheme === "dark")
    }
    //toggle the theme
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    //intialize theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const intialTheme = savedTheme || systemTheme;
        setThemeState(intialTheme);
        document.documentElement.classList.toggle("dark" , intialTheme === "dark");
        setMounted(true)
    } , []) 

    //prevent flash theme
    if(!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{theme , setTheme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//use customhook to use the themeconext
export function useTheme() {
    const context = useContext(ThemeContext);

    if(context === undefined) {
        throw new Error("useTheme must be used within themeprovider")
    }
    return context;
}

