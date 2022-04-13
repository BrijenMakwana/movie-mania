
import './ShowComponent.css';
import { useNavigate } from "react-router-dom";



function ShowComponent(props) {
    let navigate = useNavigate();

    return (
        <div className="main-container" onClick={()=>navigate(`/${props.type}/${props.id}`)}>
            <img src={props.image} alt="show" className="poster-image"/>
        </div>
    );
}

export default ShowComponent;
