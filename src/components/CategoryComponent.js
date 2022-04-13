
import './CategoryComponent.css';
import ShowComponent from "./ShowComponent";
import axios from "axios";
import {useEffect, useState} from "react";


function CategoryComponent(props) {
    const [posters,setPosters] = useState([]);

    const getShowData = () => {
        axios.get(props.url)
            .then( (response)=> {
                // handle success
                setPosters(response.data.results)
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
        <div className="category-container">
            <h1 className="show-title">{props.title}</h1>
            <div className="show-collection">
                {
                    posters.map((item)=>(
                        <ShowComponent image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} key={item.id} id={item.id} type={props.type}/>
                    ))
                }
            </div>


        </div>
    );
}

export default CategoryComponent;
