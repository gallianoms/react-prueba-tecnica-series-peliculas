import { configureStore } from '@reduxjs/toolkit'
import streamingSlice from '../features/streaming/streamingSlice'
import paginationSlice from '../features/pagination/paginationSlice'

export default configureStore({
  reducer: {
    streaming: streamingSlice,
    pagination: paginationSlice,
  },
})
