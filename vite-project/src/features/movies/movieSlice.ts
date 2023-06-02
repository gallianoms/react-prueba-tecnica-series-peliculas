import { createSlice } from '@reduxjs/toolkit';
import data from '../../../../data/sample.json';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    series: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMoviesStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      const { movies, series } = action.payload;
      state.movies = movies;
      state.series = series;
      state.loading = false;
      state.error = null;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
  movieSlice.actions;

export const fetchMovies = () => dispatch => {
  dispatch(fetchMoviesStart());

  try {
    const movies = data.entries.filter(entry => entry.programType === 'movie');
    const series = data.entries.filter(entry => entry.programType === 'series');

    dispatch(fetchMoviesSuccess({ movies, series }));
  } catch (error) {
    dispatch(fetchMoviesFailure(error));
  }
};

export const selectMovies = state => state.movies.movies;
export const selectSeries = state => state.movies.series;
export const selectLoading = state => state.movies.loading;
export const selectError = state => state.movies.error;

export default movieSlice.reducer;
