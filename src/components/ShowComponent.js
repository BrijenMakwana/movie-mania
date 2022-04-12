
import './ShowComponent.css';


function ShowComponent(props) {


    return (
        <div className="main-container">
            <img src={props.image} alt="show" className="poster-image"/>
        </div>
    );
}

export default ShowComponent;
