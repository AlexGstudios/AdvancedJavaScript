import React, { useState } from "react";

export const Movie = ({props}) => {

    console.log(props)

    return(
        <div>
            <p onClick={() => {}}>{props.title} ({props.release_date})</p>
        </div>
    )
}