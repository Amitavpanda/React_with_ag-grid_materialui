import React, { useEffect, useCallback, useState, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const AllData = () => {
    const [rowData, setRowData] = useState([]);
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


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Amitavpanda/demo/posts')
            .then(res => res.json())
            .then(rowData => setRowData(rowData))
            .catch(err => console.log(err))
    }, []);
    const [columnDefs] = useState([
        { field: "id", headerName: 'Employee_ID' },
        { field: "name", headerName: 'Name' },
        { field: "branch", headerName: 'Branch' },
        { field: "MorningShiftDays", headerName: "MorningShiftDays" },
        { field: "EveningShiftDays", headerName: "EveningShiftDays" },
        { field: "MorningLoginTime", headerName: "MorningLoginTIme" },
        { field: "MornigLogoutTime", headerName: "MorningLogoutTime" },
        { field: "EveningLoginTime", headerName: "EveningLoginTIme" },
        { field: "EveningLogoutTime", headerName: "EveningLogoutTime" },
        { field: "MorningHours", headerName: "MorningHours" },
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
                columns: ['name', 'MorningHours', 'EveningHours', 'TotalHours'],
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
        h1 > All Data < /h1> <
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
export default AllData;