import { Stream } from '../interfaces/stream'

const Popup = ({
  serie,
  movie,
  onClose,
}: {
  serie: Stream | null
  movie: Stream | null
  onClose: () => void
}) => {
  if (serie) {
    return (
      <div className='fixed top-0 left-0 w-full h-full p-4 md:p-10 flex items-center justify-center bg-black bg-opacity-50 z-10'>
        <div className='bg-white p-4 rounded-md w-full md:w-1/2'>
          <div className='flex justify-end'></div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='md:col-span-2'>
              <h3 className='text-xl md:text-2xl font-medium mb-2'>
                {serie.title}
              </h3>
              <p className='mb-2 text-sm md:text-md mt-4'>
                {serie.description}
              </p>
              <p className='text-xs md:text-sm mt-4'>
                Release Year: {serie.releaseYear}
              </p>
            </div>
            <div className='flex justify-center'>
              <img
                src={serie.images['Poster Art'].url}
                alt={serie.title}
                className='w-56 h-auto object-cover rounded-md'
              />
            </div>
            <button
              className='mt-4 py-2 px-4 bg-slate-800 text-white rounded-md'
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (movie) {
    return (
      <div className='fixed top-0 left-0 w-full h-full p-4 md:p-10 flex items-center justify-center bg-black bg-opacity-50 z-10'>
        <div className='bg-white p-4 rounded-md w-full md:w-1/2'>
          <div className='flex justify-end'></div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='md:col-span-2'>
              <h3 className='text-xl md:text-2xl font-medium mb-2'>
                {movie.title}
              </h3>
              <p className='mb-2 text-sm md:text-md mt-4'>
                {movie.description}
              </p>
              <p className='text-xs md:text-sm mt-4'>
                Release Year: {movie.releaseYear}
              </p>
            </div>
            <div className='flex justify-center'>
              <img
                src={movie.images['Poster Art'].url}
                alt={movie.title}
                className='w-56 h-auto object-cover rounded-md'
              />
            </div>
            <button
              className='mt-4 py-2 px-4 bg-slate-800 text-white rounded-md'
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Popup
