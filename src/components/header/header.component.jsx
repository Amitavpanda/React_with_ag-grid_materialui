import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import DrawerComponent from "../drawer/drawer.component";
const Header = () => {
    return ( <
        div >
        <
        AppBar >
        <
        Toolbar >
        <
        DrawerComponent / >
        <
        Button sx = {
            { color: "inherit", marginLeft: "auto" } } > SignIn < /Button> <
        Button sx = {
            { color: "inherit", marginLeft: "10px" } } > SignOut < /Button> <
        /Toolbar>

        <
        /AppBar> <
        h1 sx = {
            { fontSize: "70px" } } > HOME PAGE < /h1> <
        /div>
    )
}

export default Header;