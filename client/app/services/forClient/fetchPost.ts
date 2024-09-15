import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts :any = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get("http://localhost:8080/posts")
    return response.data;
})