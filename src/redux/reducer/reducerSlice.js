import { createSlice } from "@reduxjs/toolkit";


export const TwitterReducer = createSlice({
    name:'twitter',
    initialState:{
        Twitterpost:[

        ],
        UserCredentials:{
            
        }
    },
    reducers:{
        AddPost:(state,action)=>{
            return{
                ...state,
                Twitterpost:[...state.Twitterpost,action.payload]
            }
        },
        Userdetails:(state,action)=>{
            return{
                ...state,
                UserCredentials:action.payload
            }
        }
    }
})

export const {AddPost,Userdetails} = TwitterReducer.actions
export default TwitterReducer.reducer