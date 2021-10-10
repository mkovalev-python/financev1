import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "./settings";

export const cardsPossibilities = createAsyncThunk(
    "cards/cardsPossibilities",
    async (data, { rejectWithValue }) => {
        const response = await api.post("home/possibilities/", { json: data });
        const dataResponse = await response.json();
        if (!response.ok) {
            return rejectWithValue(dataResponse);
        }
        return dataResponse;
    }
);