import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, IconButton, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [organisatinOpen, setOrganisatinOpen] = useState(false);
    const [electricalOpen, setElectricalOpen] = useState(false);
    const [mechanicalOpen, setMechanicalOpen] = useState(false);
    const handleOrganisationClick = () => {
        setOrganisatinOpen(!organisatinOpen);
    };
    const handleElectricalClick = () => {
        setElectricalOpen(!electricalOpen);
    };
    const handleMechanicalClick = () => {
        setMechanicalOpen(!mechanicalOpen);
    };
    return ( <
        div >
        <
        Drawer open = { openDrawer }
        onClose = {
            () => setOpenDrawer(false) } >
        <
        List >
        <
        ListItemButton onClick = { handleOrganisationClick } >
        <
        ListItemIcon >
        <
        ListItemText > Organisation < /ListItemText> <
        /ListItemIcon> { organisatinOpen ? < ExpandLess / > : < ExpandMore / > } <
        /ListItemButton> <
        Collapse in = { organisatinOpen }
        timeout = "auto"
        unmountOnExit >
        <
        List component = "div"
        disablePadding >


        <
        ListItemButton onClick = { handleElectricalClick } >
        <
        ListItemIcon >
        <
        ListItemText > Electrical < /ListItemText> <
        /ListItemIcon> { electricalOpen ? < ExpandLess / > : < ExpandMore / > }

        <
        /ListItemButton> <
        Collapse in = { electricalOpen }
        timeout = "auto"
        unmountOnExit >
        <
        List component = "div"
        disablePadding >
        <
        Link to = "/eveninge"
        style = {
            { textDecoration: 'none' } } >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        ListItemText > Evening < /ListItemText> <
        /ListItemIcon> <
        /ListItemButton> <
        /Link> <
        Link to = "/morninge"
        style = {
            { textDecoration: 'none' } } >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        ListItemText > Morning < /ListItemText> <
        /ListItemIcon> <
        /ListItemButton> <
        /Link>



        <
        /List> <
        /Collapse> <
        ListItemButton onClick = { handleMechanicalClick } >
        <
        ListItemIcon >
        <
        ListItemText > Mechanical < /ListItemText> <
        /ListItemIcon> { mechanicalOpen ? < ExpandLess / > : < ExpandMore / > } <
        /ListItemButton> <
        Collapse in = { mechanicalOpen }
        timeout = "auto"
        unmountOnExit >
        <
        List component = "div"
        disablePadding >
        <
        Link to = "/eveningm"
        style = {
            { textDecoration: 'none' } } >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        ListItemText > Evening < /ListItemText> <
        /ListItemIcon> <
        /ListItemButton> <
        /Link> <
        Link to = "/morningm"
        style = {
            { textDecoration: 'none' } } >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        ListItemText > Morning < /ListItemText> <
        /ListItemIcon> <
        /ListItemButton> <
        /Link>       


        <
        /List> <
        /Collapse>     





        <
        /List> <
        /Collapse> <
        Link to = "/alldata"
        style = {
            { textDecoration: 'none' } } >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        ListItemText > All Data < /ListItemText> <
        /ListItemIcon>

        <
        /ListItemButton> <
        /Link>

        <
        /List> <
        /Drawer> <
        IconButton onClick = {
            () => setOpenDrawer(!openDrawer) } >
        <
        MenuIcon sx = {
            { color: "white" } }
        /> <
        /IconButton> <
        /div>
    )
}

export default DrawerComponent;