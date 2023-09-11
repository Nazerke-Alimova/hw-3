import React from "react";
import Location from "../Location/Location";
import DateBox from "../DateBox/DateBox";

export default function LocationBox({weather}){
return(
    <div>
<Location name={weather.name} country={weather.sys.country}/>
<DateBox date={new Date()}/>
    </div>
)
}