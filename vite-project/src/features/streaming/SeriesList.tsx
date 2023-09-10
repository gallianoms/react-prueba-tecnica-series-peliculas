import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchStreaming,
  selectSeries,
  selectLoading,
  selectError,
} from './streamingSlice.ts'

import Popup from '../../components/Popup'
import { Stream } from '../../interfaces/stream.ts'
import Pagination from '../../components/Pagination.tsx'
import Card from '../../components/Card.tsx'

const SeriesList = () => {
  const dispatch = useDispatch()
  const series = useSelector(selectSeries)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchStreaming())
  }, [dispatch])

  const filteredSeries = series
    .filter(
      serie => serie.releaseYear >= 2010 && serie.programType === 'series'
    )
    .sort((a, b) => a.title.localeCompare(b.title))

  const first20Series = filteredSeries.slice(0, 20)

  const [selectedSerie, setSelectedSerie] = useState<Stream | null>(null)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    // <Pagination series={series} movies={[]} />
    <div className='m-4 '>
      <h2 className='text-xl font-medium mb-4 p-4'>List of Series</h2>
      <ul className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {first20Series.map(serie => (
          <li
            key={serie.title}
            className='bg-gray-100 p-4 rounded-md movie-item hover:bg-slate-200 hover:border-white shadow-sm'
            onClick={() => setSelectedSerie(serie)}
          >
            <div className=''>
              <h3 className='text-lg font-semibold mb-2'>{serie.title}</h3>
              <img
                src={serie.images['Poster Art'].url}
                alt={serie.title}
                className='w-full h-full object-cover rounded-md'
              />
            </div>
          </li>
        ))}
      </ul>
      {selectedSerie && (
        <Popup
          serie={selectedSerie}
          movie={null}
          onClose={() => setSelectedSerie(null)}
        />
      )}
    </div>
  )
}

export default SeriesList
