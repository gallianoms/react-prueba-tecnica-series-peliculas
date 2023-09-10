import { AnyAction, Dispatch, createSlice } from '@reduxjs/toolkit'
import data from '../../../../data/sample.json'
import { Stream } from '../../interfaces/stream'

const streamingSlice = createSlice({
  name: 'streaming',
  initialState: {
    movies: [] as Stream[],
    series: [] as Stream[],
    loading: false as boolean,
    error: null as null | string,
    search: '' as string,
    searchList: [] as Stream[],
  },
  reducers: {
    fetchStreamingsStart: state => {
      state.loading = true
      state.error = null
    },
    fetchStreamingsSuccess: (state, action) => {
      const { movies, series } = action.payload

      state.movies = movies
      state.series = series
      state.loading = false
      state.error = null
    },
    fetchStreamingsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    searchMoviesByYear: (state, action) => {
      const { year } = action.payload
      state.search = year.toString()
      state.searchList = isNaN(year)
        ? []
        : state.movies.filter(movie => movie.releaseYear === year)
    },
  },
})

export const {
  fetchStreamingsStart,
  fetchStreamingsSuccess,
  fetchStreamingsFailure,
  searchMoviesByYear,
} = streamingSlice.actions

export const fetchStreaming = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch(fetchStreamingsStart())

  try {
    const movies = data.entries.filter(entry => entry.programType === 'movie')
    const series = data.entries.filter(entry => entry.programType === 'series')

    dispatch(fetchStreamingsSuccess({ movies, series }))
  } catch (error) {
    dispatch(fetchStreamingsFailure(error))
  }
}

export const selectMovies = (state: { streaming: { movies: Stream[] } }) =>
  state.streaming.movies
export const selectSeries = (state: { streaming: { series: Stream[] } }) =>
  state.streaming.series
export const selectLoading = (state: { streaming: { loading: boolean } }) =>
  state.streaming.loading
export const selectError = (state: { streaming: { error: null | string } }) =>
  state.streaming.error
export const selectSearch = (state: { streaming: { search: string } }) =>
  state.streaming.search
export const selectSearchList = (state: {
  streaming: { searchList: Stream[] }
}) => state.streaming.searchList

export default streamingSlice.reducer
