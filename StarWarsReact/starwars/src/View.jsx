import React, { useState, useEffect } from 'react';
import { Movie } from './Movie';

export const View = () => {

    const URL = "https://swapi.dev/api/films";
    
    const [starWars, setStarWars] = useState([]);

    useEffect(() => {
        const fetching = async () => {
            const response = await fetch(URL);
            const getDataNow = await response.json();
            setStarWars(getDataNow.results);
        };
        fetching();
    }, []);

    return(
        <div className="View">
            {starWars.map((movie, i) => {
                return(
                    <div className="movie" key={i}>
                        <Movie props={movie}></Movie>
                    </div>
                )
            })}
        </div>
    )
}