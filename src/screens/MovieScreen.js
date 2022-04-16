
import './MovieScreen.css';
import axios from "axios";
import {useEffect, useState} from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { FcCalendar, FcClock,FcRating } from "react-icons/fc";


function MovieScreen() {
    const [movie, setMovie] = useState([]);
    const [videoId,setVideoId] = useState("");
    let {type,id} = useParams();

    const getShowData = () => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US`)
            .then( (response)=> {
                // handle success
                setMovie(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    const getVideo = () => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US`)
            .then( (response)=> {
                // handle success
                setVideoId(response.data.results[0].key);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }




    const convertMinutesToHours = (minutes) => {
        let hours = Math.floor(minutes / 60);
        let minutesLeft = minutes % 60;
        return `${hours}h ${minutesLeft}m`;
    }

    useEffect(() => {
        getShowData();
        getVideo();
    }, []);


    return (
        <div className="movie-container">
            <div className="movie-details">
                <div className="left-container">
                    <iframe
                        width="650"
                        height="400"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
                <div className="right-container">
                    <h1 className="movie-title">{movie.title || movie.name}</h1>
                    <p className="movie-description">{movie.overview}</p>
                    <h2 className="movie-rating"><FcRating/> {movie.vote_average}</h2>
                    <h2 className="release-date"><FcCalendar/>
                        {
                            type === "movie" ?  moment(movie.release_date).format("MMM Do YY") : moment(movie.first_air_date).format("MMM Do YY")
                        }
                    </h2>
                    {
                        movie.runtime && <h2 className="movie-runtime"><FcClock/> {convertMinutesToHours(movie.runtime)}</h2>

                    }
                </div>


            </div>
        </div>
    );
}

export default MovieScreen;
