import { createSlice } from '@reduxjs/toolkit'

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1 as number, // current page
    itemsPerPage: 10 as number, // items per page
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload
    },
  },
})

export const { setCurrentPage, setItemsPerPage } = paginationSlice.actions

export const selectPagination = (state: {
  pagination: { currentPage: number; itemsPerPage: number }
}) => state.pagination

export default paginationSlice.reducer
