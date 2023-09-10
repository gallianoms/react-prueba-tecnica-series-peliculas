import { useDispatch, useSelector } from 'react-redux'
import {
  setItemsPerPage,
  setCurrentPage,
  selectPagination,
} from '../features/pagination/paginationSlice'
import { useLocation } from 'react-router-dom'
import { Stream } from '../interfaces/stream'

const Pagination = ({
  series = [],
  movies = [],
}: {
  series: Stream[]
  movies: Stream[]
}) => {
  const location = useLocation()
  const isSeriesPage = location.pathname === '/series'

  const { currentPage, itemsPerPage } = useSelector(selectPagination)

  const dispatch = useDispatch()

  const startIdx = (currentPage - 1) * itemsPerPage
  const endIdx = startIdx + itemsPerPage
  const paginatedData = isSeriesPage
    ? series.slice(startIdx, endIdx)
    : movies.slice(startIdx, endIdx)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1))
    }
  }

  const handleNextPage = () => {
    if (currentPage < Math.ceil(series.length / itemsPerPage)) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  const handleItemsPerPageSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLimit = parseInt(e.target.value)
    dispatch(setItemsPerPage(newLimit))
  }

  return (
    <div>
      {paginatedData.map(item => (
        <div key={item.title}>{item.title}</div>
      ))}
      <div className='flex  items-center mt-4'>
        <button
          className='px-4 py-2 bg-gray-200 rounded-md mr-2'
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button className='px-4 py-2 bg-gray-200 rounded-md mr-2'>
          {currentPage}
        </button>
        <button
          className='px-4 py-2 bg-gray-200 rounded-md mr-2'
          onClick={handleNextPage}
        >
          Next
        </button>
        <select
          className='px-4 py-2 bg-gray-200 rounded-md'
          onChange={handleItemsPerPageSelect}
          value={itemsPerPage}
        >
          <option value='5'>5 per page</option>
          <option value='10'>10 per page</option>
          <option value='20'>20 per page</option>
        </select>
      </div>
    </div>
  )
}

export default Pagination
