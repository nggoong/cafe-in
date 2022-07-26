import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading:false
}

const loadingSlice = createSlice({
    name:'loading',
    initialState,
    reducers: {
        setTrueLoading:(state) => {
            state.isLoading = true;
        },
        setFalseLoading:(state) => {
            state.isLoading = false;
        }
    }
})

const loadingActions = loadingSlice.actions;
export { loadingActions };
export default loadingSlice.reducer;