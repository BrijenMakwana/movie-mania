
import './HomeScreen.css';
import CategoryComponent from "../components/CategoryComponent";
import BigPoster from "../components/BigPoster";
import {useEffect, useState} from "react";
import Header from "../components/Header";
import axios from "axios";
import ShowComponent from "../components/ShowComponent";


function HomeScreen() {
    const [search,setSearch] = useState("");
    const [searchResult,setSearchResult] = useState([]);

    const setSearchValue = (e) => {
        setSearch(e.target.value);
    }

    const getSearchResult =  () => {
         axios.get("https://api.themoviedb.org/3/search/movie?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1&include_adult=false",{
            params:{
                query:search
            }
        })
            .then( (response)=> {
                // handle success
                setSearchResult(response.data.results);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    useEffect(()=>{
        getSearchResult();
    },[search]);

    const apiRequests = [
        {
            id: "1",
            title: "Upcoming Movies",
            url: "https://api.themoviedb.org/3/movie/upcoming?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
            type: "movie"
        },
        {
            id: "2",
            title: "Trending",
            url: "https://api.themoviedb.org/3/trending/movie/week?api_key=5855e9b9f4ec1fd91373dae25331f786",
            type: "movie"
        },
        {
            id: "3",
            title: "Top Rated Movies",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
            type: "movie"
        },
        {
            id: "4",
            title: "Popular",
            url: "https://api.themoviedb.org/3/movie/popular?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
            type: "movie"
        },
        {
            id: "5",
            title: "Now Playing",
            url: "https://api.themoviedb.org/3/movie/now_playing?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
            type: "movie"
        },
        {
            id: "6",
            title: "Popular TV Shows",
            url: "https://api.themoviedb.org/3/tv/popular?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
            type: "tv"
        },
        {
            id: "8",
            title: "Top Rated TV Shows",
            url: "https://api.themoviedb.org/3/tv/top_rated?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
            type: "tv"
        },
        {
            id: "9",
            title: "TV Shows Airing Today",
            url: "https://api.themoviedb.org/3/tv/airing_today?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1",
            type: "tv"
        }
    ];
    return (
        <div className="home-container">
            <Header setSearchValue={setSearchValue}/>
            {/* search result */}
            {
                <div className="result-container">
                    {
                        searchResult && searchResult.map((item)=>(
                            <ShowComponent image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} key={item.id} id={item.id} type="movie"/>
                        ))
                    }
                </div>

            }
            {/* categories */}
            <BigPoster/>
            {
                apiRequests.map((item)=>(
                    <CategoryComponent title={item.title} url={item.url} key={item.id} type={item.type}/>
                ))
            }

        </div>
    );
}

export default HomeScreen;
