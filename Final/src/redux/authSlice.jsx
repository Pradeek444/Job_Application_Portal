import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthenticated:false,
    token:'',
    role:''
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuthentication(state,action){
            state.isAuthenticated=action.payload;
        },
        setToken(state,action){
            state.token=action.payload;
        },
        setRole(state,action){
            state.role=action.payload;
        },
    }
})

// Select the auth state
const selectAuth = state => state.auth;

// Selector to get the role
export const selectUserRole = createSelector(
  [selectAuth],
  auth => auth.role.role
);
export const selectToken = createSelector(
  [selectAuth],
  auth => auth.token
);
export const {setAuthentication,setRole,setToken}=authSlice.actions;
export default authSlice.reducer;