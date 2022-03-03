import React, { useEffect, useCallback, useState, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material"
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const EveningM = () => {
    // const [rowData,setRowData] = useState([]);
    const gridRef = useRef();
    const gridStyle = useMemo(() => ({ height: 600, width: 2000 }), []);
    const defaultColDef = useMemo(() => {
        return {
            editable: true,
            sortable: true,
            flex: 1,
            minWidth: 100,
            filter: true,
            resizable: true,
        };
    }, []);


    //    useEffect(() => {
    //        fetch('https://my-json-server.typicode.com/Amitavpanda/demo/posts')
    //        .then(res => res.json())
    //        .then(rowData => setRowData(rowData))
    //        .catch(err => console.log(err))
    //    }, []);
    const [rowData] = useState([{
            "id": 1,
            "name": "Virat Kohli",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },

        {
            "id": 2,
            "name": "Jeff Bezos",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },

        {
            "id": 3,
            "name": "Amelia Griffin",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },

        {
            "id": 4,
            "name": "Daisy Kobe",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },


        {
            "id": 5,
            "name": "Sophie Black",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },
        {
            "id": 6,
            "name": "Emily Brennan",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },

        {
            "id": 7,
            "name": "Sundar Pichai",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },


        {
            "id": 8,
            "name": "Isabella Cage",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },
        {
            "id": 9,
            "name": "Raju",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },



        {
            "id": 10,
            "name": "Ashish",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },
        {
            "id": 11,
            "name": "Shubhankar",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        },
        {
            "id": 12,
            "name": "Pinu",
            "branch": "Mechanical",
            "MorningShiftDays": 123,
            "EveningShiftDays": 242,
            "MorningLoginTime": "10:30",
            "MornigLogoutTime": "20:30",
            "EveningLoginTime": "20:30",
            "EveningLogoutTime": "5:30",
            "MorningHours": 1230,
            "EveningHours": 2178,
            "TotalHours": 3408
        }

    ])
    const [columnDefs] = useState([
        { field: "id", headerName: 'Employee_ID' },
        { field: "name", headerName: 'Name' },
        { field: "EveningShiftDays", headerName: "EveningShiftDays" },
        { field: "EveningLoginTime", headerName: "EveningLoginTIme" },
        { field: "EveningLogoutTime", headerName: "EveningLogoutTime" },
        { field: "EveningHours", headerName: "EveningHours" },
        { field: "TotalHours", headerName: "TotalHours" },
    ]);
    const popupParent = useMemo(() => {
        return document.body;
    }, []);
    const chartThemes = useMemo(() => {
        return ['ag-pastel', 'ag-material-dark', 'ag-vivid-dark', 'ag-solar'];
    }, []);
    const chartThemeOverrides = useMemo(() => {
        return {
            cartesian: {
                axes: {
                    category: {
                        label: {
                            rotation: 335,
                        },
                    },
                },
            },
        };
    }, []);
    const onFirstDataRendered = useCallback((params) => {
        var createRangeChartParams = {
            cellRange: {
                rowStartIndex: 0,
                rowEndIndex: 79,
                columns: ['name', 'EveningHours', 'TotalHours'],
            },
            chartType: 'groupedColumn',
            chartContainer: document.querySelector('#myChart'),
            aggFunc: 'sum',
        };
        gridRef.current.api.createRangeChart(createRangeChartParams);
    }, []);
    return ( < div >
        <
        h1 sx = {
            { fontSize: "4em" } } > Mechanical Morning Staff Details < /h1> <
        Button sx = {
            { fontSize: "20px", marginBottom: "20px" } }
        variant = "contained"
        size = "medium"
        component = { Link }
        to = { '/' } >
        Home <
        /Button>

        <
        div className = "ag-theme-alpine"
        style = { gridStyle } >
        <
        AgGridReact ref = { gridRef }
        defaultColDef = { defaultColDef }
        rowData = { rowData }
        columnDefs = { columnDefs }
        popupParent = { popupParent }
        enableRangeSelection = { true }
        enableCharts = { true }
        chartThemes = { chartThemes }
        chartThemeOverrides = { chartThemeOverrides }
        onFirstDataRendered = { onFirstDataRendered } >
        <
        /AgGridReact>

        <
        /div> <
        div id = "myChart"
        className = "my-chart" > < /div> <
        /div>
    )
}
export default EveningM;