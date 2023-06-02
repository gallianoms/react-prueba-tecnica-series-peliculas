import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovies,
  selectMovies,
  selectLoading,
  selectError,
} from './movieSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredMovies = movies
    .filter(movie => movie.releaseYear >= 2010 && movie.programType === 'movie')
    .sort((a, b) => a.title.localeCompare(b.title));

  const first20Movies = filteredMovies.slice(0, 20);

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>List of Movies</h2>
      <ul className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {first20Movies.map(movie => (
          <li
            key={movie.title}
            className='bg-gray-100 p-4 rounded-md hover:bg-slate-200 hover:border-white shadow-sm'
          >
            <div>
              <h3 className='text-lg font-semibold mb-2'>{movie.title}</h3>
              <img
                src={movie.images['Poster Art'].url}
                alt={movie.title}
                className='w-full h-full object-cover rounded-md'
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
