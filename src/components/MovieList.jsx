import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies, searchMovies } from '../Redux/Action';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  console.log(movies)

    useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

   const handleSearch = (e) => {
    const query = e.target.value;
    dispatch(searchMovies(query));
  };

  return (
    <>
        <div className="banner container">
        <div className="d-flex flex-wrap justidfy-content-center mt-5">
          {movies && movies.map((movie, index) => (
            <div className="wrapper col-3 mb-3" key={index}>
              <div className="card">
                <div className="poster"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Location Unknown" /></div>
                <div className="details">
                  <h2 className='fs-3 font-poppins '>{movie.original_title}</h2>
                  <div className="year">
                      <p className='font-joseffin text-white'>Year : {movie.release_date}</p>
                    </div>
                  <div className="overview p-0">
                    <p className='font-joseffin text-white'>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList