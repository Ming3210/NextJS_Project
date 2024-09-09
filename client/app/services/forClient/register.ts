"use client"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register: any = createAsyncThunk(
  "auth/register",
  async (userData: any) => {
    const response = await axios.post("http://localhost:8080/users", userData);
    return response.data;
  }
);
