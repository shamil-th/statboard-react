import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


// table data
export const tableData = createAsyncThunk('stats/tableData', async() => {
    try {
        const response = await axios.get('http://localhost:3001/api/table');
        if(!response.data){
            throw new Error("data not found")
        }
        const dataLength = response.data.length;
        const datas = response.data;
        const tableDetails = {dataLength,datas}

        return tableDetails;
    }catch(error){
        console.error('something went wrong');
    }
});

// line graph data
export const lineGraphData = createAsyncThunk('stats/lineGraphData', async() => {
    try {
        const response = await axios.get('http://localhost:3001/api/graph');
        if(!response.data){
            throw new Error("data not found")
        }
        return response.data;
    }catch(error){
        console.error('something went wrong');
    }
});

// pie-chart data
export const pieChartData = createAsyncThunk('stats/pieChartData', async() => {
    try {
        const response = await axios.get('http://localhost:3001/api/pie-chart');
        if(!response.data){
            throw new Error("data not found")
        }
        return response.data;
    }catch(error){
        console.error('something went wrong');
    }
});


const initialState = {
    table:[],
    lineGraph:[],
    pieChart:[],
    tableLength:[],
    status:[],
};


const statSlice = createSlice({
    name: 'stats',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(tableData.fulfilled, (state,action) => {
            state.status = "succeeded";
            state.table = action.payload.datas;
            state.tableLength = action.payload.dataLength;
        })
        .addCase(lineGraphData.fulfilled, (state,action) => {
            state.status = "succeeded";
            state.lineGraph = action.payload;
        })
        .addCase(pieChartData.fulfilled, (state,action) => {
            state.status = "succeeded";
            state.pieChart = action.payload;
        })
    
    }
});

export default statSlice.reducer;