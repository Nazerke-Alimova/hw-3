import React from "react";
import "../Temp/Temp.css"

export default function Temp({temp}){
        return(
            <div className="temp">
                {Math.round(temp)} °C
            </div>
        )
    }