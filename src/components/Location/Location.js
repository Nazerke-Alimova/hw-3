import React from "react";
import "../Location/Location.css"

export default function Location({ name, country }) {
    return (
      <div className="location">
        {name},{country}
      </div>
    );
  }
