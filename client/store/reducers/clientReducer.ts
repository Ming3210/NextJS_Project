"use"
import { fetchPosts } from "@/app/services/forClient/fetchPost"
import { fetchUser } from "@/app/services/forClient/fetchUser"
import { register } from "@/app/services/forClient/register"
import { createSlice } from "@reduxjs/toolkit"



const clientReducer  = createSlice({
    name: "clients",
    initialState: {
        userList:[],
        user:{},
        posts: [],
    },
    reducers: {
       
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state:any, action) => {
           state.userList = []
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.userList = action.payload
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload
            console.log(state.user);
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
})

export default clientReducer.reducer