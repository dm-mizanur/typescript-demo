import { useContext } from "react";
import { theme } from "./theme";
import { ThemeContext } from "./ThemeContext";

export const Box = () =>{
    return <div style={{backgroundColor : theme.primary.main, color: theme.primary.text}}>Theme context</div>
}