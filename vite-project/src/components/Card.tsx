const Card = ({ serie }) => {
  return (
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
  )
}

export default Card
