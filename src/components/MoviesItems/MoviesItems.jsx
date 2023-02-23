import css from 'components/MoviesItems/MoviesItems.module.css'
import { Link } from 'react-router-dom'

const MoviesItems = ({ movies }) => {


   const moviesItems = movies?.map(({ id, poster_path, original_title }) =>
      <Link to={`/movies/${id}`} key={id} className={css.link}>
         <li key={id} className={css.items}>
            <img className={css.images} src={poster_path ? `https://image.tmdb.org/t/p/w400${poster_path}` : `https://via.placeholder.com/400x600`} alt="#" />
            <p className={css.title}>{original_title}</p>
         </li>
      </Link>)

   return (
      <ul className={css.menu}>{moviesItems}</ul>
   )
}
export default MoviesItems