import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postDetails = createAsyncThunk('appformSlice/postDetails', async(data) => {
    const apiUrl = 'https://jytech.requestcatcher.com/.';
    const response = await axios.post(apiUrl, data)
})


export const formSlice = createSlice({
    name: 'appformSlice',
    initialState: {
        introductionData: [],
        aboutData:[]
    },
    reducers: {
        introductionData: (state, action) => {
            state.introductionData = action?.payload
        },
        aboutData: (state, action) => {
            state.aboutData = action?.payload
        }
    }
})

export const { introductionData, aboutData } = formSlice.actions
export default formSlice.reducer
