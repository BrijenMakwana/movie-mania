
import './Header.css';
import {useState} from "react";



function Header(props) {
    return (
        <div className="header-container">
            <h1 className="app-title">Movie Mania</h1>
            <input type="text" placeholder="search movie" className="search-input" onChange={props.setSearchValue}/>
        </div>
    );
}

export default Header;
