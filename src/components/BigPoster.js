
import './BigPoster.css';
import axios from "axios";
import {useEffect, useState} from "react";


function BigPoster() {
const [poster,setPoster] = useState("");
const [title,setTitle] = useState("");

    const getShowData = () => {
        axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=5855e9b9f4ec1fd91373dae25331f786")
            .then( (response)=> {
                // handle success

                setPoster(response.data.results[2].poster_path);
                setTitle(response.data.results[2].title);

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
        <div className="poster-container">
            <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="movie" className="big-poster"/>*/}
            <h1 className="banner-title">{title}</h1>
        </div>
    );
}

export default BigPoster;
