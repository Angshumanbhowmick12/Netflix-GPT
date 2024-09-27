import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    latestMovies: null,
    trendingTvShows:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    addLatestMovies:(state,action)=>{
      state.latestMovies=action.payload
    },

    addTvShows:(state,action)=>{
      state.trendingTvShows=action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addLatestMovies,addTvShows } =
  moviesSlice.actions;

export default moviesSlice.reducer;