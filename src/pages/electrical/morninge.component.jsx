import React, { useEffect, useCallback, useState, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const MorningE = () => {
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
    //        fetch('../../mechanical_db.json')
    //        .then(res => res.json())
    //        .then(rowData => setRowData(rowData))
    //        .catch(err => console.log(err))
    //    }, []);
    const [rowData] = useState([{
            "id": 1,
            "name": "Amitav Panda",
            "branch": "Electrical",
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
            "name": "Elon Musk",
            "branch": "Electrical",
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
            "name": "Rohit Sharma",
            "branch": "Electrical",
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
            "name": "Dimple Lopes",
            "branch": "Electrical",
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
            "name": "Olivia Brock",
            "branch": "Electrical",
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
            "name": "Steve Jobs",
            "branch": "Electrical",
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
            "name": "MS Dhoni",
            "branch": "Electrical",
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
            "name": "KL Rahul",
            "branch": "Electrical",
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
            "name": "Bill Gates",
            "branch": "Electrical",
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
            "name": "Chloe Cadwell",
            "branch": "Electrical",
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
            "name": "Farhan",
            "branch": "Electrical",
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
            "name": "Rancho",
            "branch": "Electrical",
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
            "id": 13,
            "name": "Satyam",
            "branch": "Electrical",
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
            "id": 14,
            "name": "Sibam",
            "branch": "Electrical",
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
        { field: "MorningShiftDays", headerName: "MorningShiftDays" },
        { field: "MorningLoginTime", headerName: "MorningLoginTIme" },
        { field: "MornigLogoutTime", headerName: "MorningLogoutTime" },
        { field: "MorningHours", headerName: "MorningHours" },
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
                columns: ['name', 'MorningHours', 'TotalHours'],
            },
            chartType: 'groupedColumn',
            chartContainer: document.querySelector('#myChart'),
            aggFunc: 'sum',
        };
        gridRef.current.api.createRangeChart(createRangeChartParams);
    }, []);
    return ( <
        div >
        <
        h1 > Electrical Morning Shift Days < /h1> <
        Link to = "/"
        style = {
            { textDecoration: 'none' } } > Home < /Link> <
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


export default MorningE;