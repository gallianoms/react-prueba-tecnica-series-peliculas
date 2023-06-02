import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMovies,
  selectSeries,
  selectLoading,
  selectError,
} from './movieSlice.ts';

import Popup from '../../components/Popup';

const SeriesList = () => {
  const dispatch = useDispatch();
  const series = useSelector(selectSeries);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const movies = useSelector(selectMovies);

  const filteredSeries = series
    .filter(
      movie => movie.releaseYear >= 2010 && movie.programType === 'series'
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  const first20Series = filteredSeries.slice(0, 20);

  const [selectedSeries, setSelectedSeries] = useState(null);

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>List of Series</h2>
      <ul className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {first20Series.map(series => (
          <li
            key={series.title}
            className='bg-gray-100 p-4 rounded-md movie-item hover:bg-slate-200 hover:border-white shadow-sm'
            onClick={() => setSelectedSeries(series)}
          >
            <div className=''>
              <h3 className='text-lg font-semibold mb-2'>{series.title}</h3>
              <img
                src={series.images['Poster Art'].url}
                alt={series.title}
                className='w-full h-full object-cover rounded-md'
              />
            </div>
          </li>
        ))}
      </ul>
      {selectedSeries && (
        <Popup
          series={selectedSeries}
          onClose={() => setSelectedSeries(null)}
        />
      )}
    </div>
  );
};

export default SeriesList;
