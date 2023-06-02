const Popup = ({ series, onClose }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-4 rounded-md'>
        <h3 className='text-lg font-semibold mb-2'>{series.title}</h3>
        <p className='mb-2'>{series.description}</p>
        <p>Release Year: {series.releaseYear}</p>
        <img
          src={series.images['Poster Art'].url}
          alt={series.title}
          className='w-64 h-auto object-cover rounded-md'
        />
        <button
          className='mt-4 py-2 px-4 bg-slate-800 text-white rounded-md'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
