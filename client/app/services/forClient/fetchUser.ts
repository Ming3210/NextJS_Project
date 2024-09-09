"use client"

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser:any = createAsyncThunk("fetch/fetchUser", async () =>{
    const response = await axios.get("http://localhost:8080/users")
    return response.data;
})