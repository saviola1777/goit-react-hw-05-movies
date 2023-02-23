import { getSearchMovies } from 'ApiGetAxios/FilmsApi'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesSearch from "components/MoviesSearch/MoviesSearch";
import MoviesItems from 'components/MoviesItems/MoviesItems'
import MoreMoviesButton from 'components/MoreMoviesButton/MoreMoviesButton'
import Loader from 'components/Loader/Loader';


const Movies = () => {
  const [movies, stateMovies] = useState([]);
  // const [search, searchrState] = useState('');
  const [page, pageState] = useState(1);
  const [totalPages, totalPagesState] = useState(1);
  const [loading, loadingState] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');
 
   console.log('Комрлнент Movies', search)
  //  console.log('Комрлнент Movies в ньому searchParams ', search)

 useEffect(() => {
     if (!search) return;                 // важлива умова якщо  (!search) тобто його немає null то він не робить запит робить ретьорн коли ми щось вели і получили то робить 
     const fetchPosts = async () => {
      try {
        loadingState(true)
        const results = await getSearchMovies(search, page)
        totalPagesState(results?.total_pages)
        stateMovies(results?.results)
      }
      catch (error) { console.log(error.message.error)}
      finally {
        loadingState(false)
        
      }
    }
    fetchPosts();
  }, [search, page])

  const searchImage = (value) => {
    setSearchParams({query:value});
    stateMovies([])
    pageState(1);
    
  }

  const loadMore = () => {
    pageState(prevPage => prevPage + 1)
  }

  return (
    <div>
      <MoviesSearch onSubmit={searchImage} />
      {loading && <Loader />}
      
      {movies&&<MoviesItems movies={movies} />}
      {Boolean((page !== totalPages)) && <MoreMoviesButton onClick={loadMore} />}
    </div>
  )
}
export default Movies




