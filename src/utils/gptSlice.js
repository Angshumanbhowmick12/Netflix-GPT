import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleSearch:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addMovieResults:(state,action)=>{
            const{movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
})

export const{toggleSearch,addMovieResults}=gptSlice.actions;

export default gptSlice.reducer;