"use"
import { fetchPosts } from "@/app/services/forClient/fetchPost"
import { fetchUser } from "@/app/services/forClient/fetchUser"
import { openNotifications } from "@/app/services/forClient/openNotification"
import { posting } from "@/app/services/forClient/posting"
import { register } from "@/app/services/forClient/register"
import { updateProfile } from "@/app/services/forClient/updateProfile"
import { createSlice } from "@reduxjs/toolkit"



const clientReducer  = createSlice({
    name: "clients",
    initialState: {
        userList:[],
        user:{},
        posts: [],
        openNoti: false
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
        builder.addCase(posting.fulfilled, (state:any, action) => {
            state.posts.unshift(action.payload)
        })
        builder.addCase(updateProfile.fulfilled, (state:any, action) => {
            const updateProfile = state.userList.findIndex((user:any) => user.id === action.payload.id)
            if(updateProfile >= 0){
                state.userList[updateProfile] = action.payload
            }
        })
        builder.addCase(openNotifications.fulfilled,(state:any, action) => {
            state.openNoti = action.payload
        })
    }
})

export default clientReducer.reducer