import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_URL } from "../../../Api/apiConfig";



const initialState = { records: [], loading: false, error: null, record: null };
const token = localStorage.getItem('token');
//for get the text 
export const getMainText = createAsyncThunk(
    "maintext/getmaintext",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get(`${Base_URL}/home/text`);
            return res.data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

//frot update the text
export const updateMainText = createAsyncThunk(
    "maintext/updatemaintext",
    async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${Base_URL}/home/text`, {
                method: "PUT",
                body: JSON.stringify(item),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "token": token

                }

            });
            if (res.status !== 201) {


                throw new Error("Error updating maintext");
            };
            const data = await res.json();

            return data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const mainTextSlice = createSlice({
    name: "maintext",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //get the text
        builder.addCase(getMainText.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getMainText.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        })
        builder.addCase(getMainText.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //update the text
        builder.addCase(updateMainText.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(updateMainText.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        })
        builder.addCase(updateMainText.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        })

    }
})

export default mainTextSlice.reducer;