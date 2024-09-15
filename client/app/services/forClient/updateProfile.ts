import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProfile :any = createAsyncThunk(
  "updateProfile",
  async (profileData:any) => {
    const response = await axios.put(
      `http://localhost:8080/users/${profileData.id}`,
      profileData
    );
    return response.data;
  }
);

