
import './MovieScreen.css';
import axios from "axios";
import {useEffect, useState} from "react";


function MovieScreen() {

    const getShowData = () => {
        axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=5855e9b9f4ec1fd91373dae25331f786")
            .then( (response)=> {
                // handle success

                console.log(response.data.results);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getShowData();
    }, []);


    return (
        <div className="movie-container">

        </div>
    );
}

export default MovieScreen;
