import React, { useState, useEffect } from 'react';
import { Movie } from './Movie';

export const View = () => {

    const URL = "https://swapi.dev/api/films";
    
    const [starWars, setStarWars] = useState([]);
    const [isFalse, setIsFalse] = useState(false);

    useEffect(() => {
        const fetching = async () => {
            const response = await fetch(URL);
            const getDataNow = await response.json();
            setIsFalse(true);
            setStarWars(getDataNow.results);
        };
        fetching();
    }, []);

    return(
        <div className="view">
            {isFalse ? starWars.map((movie, i) => {
                return(
                    <div className="movie" key={i}>
                        <Movie props={movie}></Movie>
                    </div>
                )
            }) : <div>Loading</div>}
        </div>
    )
}