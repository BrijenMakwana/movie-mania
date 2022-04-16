
import './Header.css';
import {useState} from "react";



function Header(props) {
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={require("../images/logo.png")} alt="logo" className="app-logo"/>
                <h1 className="app-title">Movie Mania</h1>
            </div>

            <input type="text" placeholder="search movie" className="search-input" onChange={props.setSearchValue}/>
        </div>
    );
}

export default Header;
