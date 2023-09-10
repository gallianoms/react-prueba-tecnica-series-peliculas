import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchStreaming,
  selectMovies,
  selectLoading,
  selectError,
  selectSearchList,
  selectSearch,
} from './streamingSlice'

import Popup from '../../components/Popup'
import { Stream } from '../../interfaces/stream'
import Search from '../../components/Search'

const MovieList = () => {
  const dispatch = useDispatch()

  const movies = useSelector(selectMovies)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const searchList = useSelector(selectSearchList)
  const search = useSelector(selectSearch)

  const [selectedMovie, setSelectedMovie] = useState<Stream | null>(null)

  useEffect(() => {
    dispatch(fetchStreaming())
  }, [dispatch])

  const filteredMovies = movies
    .filter(movie => movie.releaseYear >= 2010 && movie.programType === 'movie')
    .sort((a, b) => a.title.localeCompare(b.title))

  const first20Movies = filteredMovies.slice(0, 20)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (search.length > 0 && searchList.length === 0) {
    return (
      <div className='m-4'>
        <h2 className='text-xl font-medium mb-4 p-4'>List of Movies</h2>
        <Search />
        <p className='text-sm text-center'>No results found...</p>
      </div>
    )
  }

  if (search.length > 0 && searchList.length > 0) {
    return (
      <div className='m-4'>
        <h2 className='text-xl font-medium mb-4 p-4'>List of Movies</h2>
        <Search />
        <ul className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {searchList.map(movie => (
            <li
              key={movie.title}
              className='bg-gray-100 p-4 rounded-md hover:bg-slate-200 hover:border-white shadow-sm'
              onClick={() => setSelectedMovie(movie)}
            >
              <div>
                <h3 className='text-lg font-semibold mb-2'>{movie.title}</h3>
                <img
                  src={movie.images?.['Poster Art']?.url}
                  alt={movie.title}
                  className='w-full h-full object-cover rounded-md'
                />
              </div>
            </li>
          ))}
        </ul>
        {selectedMovie && (
          <Popup
            serie={null}
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    )
  }

  // TODO: fix problem isNaN
  if (search.length === 0) {
    console.log('ESTOY AQUI')
    return (
      <div className='m-4'>
        <h2 className='text-xl font-medium mb-4 p-4'>List of Movies</h2>
        <Search />
        <ul className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {first20Movies.map(movie => (
            <li
              key={movie.title}
              className='bg-gray-100 p-4 rounded-md hover:bg-slate-200 hover:border-white shadow-sm'
              onClick={() => setSelectedMovie(movie)}
            >
              <div>
                <h3 className='text-lg font-semibold mb-2'>{movie.title}</h3>
                <img
                  src={movie.images?.['Poster Art']?.url}
                  alt={movie.title}
                  className='w-full h-full object-cover rounded-md'
                />
              </div>
            </li>
          ))}
        </ul>
        {selectedMovie && (
          <Popup
            serie={null}
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    )
  }
}

export default MovieList
