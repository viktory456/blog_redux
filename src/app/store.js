import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { apiSlice } from '../features/api/apiSlice'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'


export const store = configureStore({
    reducer:{
        // posts:postsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        users:usersReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})