import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const posting :any = createAsyncThunk("posts/post", async (postData: any) => {
    const response = await axios.post("http://localhost:8080/posts", postData); // Replace with your actual API endpoint
    return response.data;
});
