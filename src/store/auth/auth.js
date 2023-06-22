

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    isStudent: false,
    isAdmin: false,
    isTecher: false,
    loading: false,
    error: null,
    accessToken: "",
    userInfo: {},
};


export const loginTeacher = createAsyncThunk(
    "auth/loginteacher", async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const res = await fetch("http://localhost:4500/login/teacher", {
                method: "POST",
                body: JSON.stringify({ email: item.email, password: item.password }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            });

            const data = await res.json();

            return data;


        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const loginStudent = createAsyncThunk(
    "auth/loginstudent", async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const res = await fetch("http://localhost:4500/login/student", {
                method: "POST",
                body: JSON.stringify({ email: item.email, password: item.password }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            });

            const data = await res.json();
            return data;


        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => {
            return { ...initialState };
        },
    },
    extraReducers: (builder) => {
        //loading
        builder.addCase(loginTeacher.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(loginTeacher.fulfilled, (state, action) => {
            state.loading = false;
            state.accessToken = action.payload.token;
            state.userInfo = action.payload;
            if (state.accessToken) {
                state.isTecher = true
            }
            if (state.accessToken && state.userInfo.is_admin) {
                state.isAdmin = true
            }
        })
        builder.addCase(loginTeacher.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //login student

        builder.addCase(loginStudent.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(loginStudent.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
            state.accessToken = action.payload.token;
            if (state.accessToken) {
                state.isStudent = true
            }
        })
        builder.addCase(loginStudent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


    },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;
