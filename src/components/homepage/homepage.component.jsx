import React from "react";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import Image from "../../static/images/background_homepage.jpg";
import './homepage.styles.css';

const HomePage = () => {

    return ( <
        div className = "container" >

        <
        h1 className = "homepageh1"
        sx = {
            { fontSize: "10px", color: "white" } } > HOME PAGE < /h1>


        <
        /div>
    )
}

export default HomePage;