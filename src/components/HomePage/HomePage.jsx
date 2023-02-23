  import { getAxios } from 'ApiGetAxios/FilmsApi'
  import { useState, useEffect, } from 'react'
  import css from 'components/HomePage/HomePage.module.css'
  import { Link } from 'react-router-dom'

  const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const { results } = await getAxios()
          setMovies(results)
        }
        catch (error) {
          console.log(error)
        }
      }
      fetchPosts();
    }, [])

    console.log('Компонент Home Page його стан' ,movies)
    const elemets = movies.map(({ id,poster_path ,original_title}) =>
     <Link to={`/movies/${id}`} key={id} className={css.link}>
     <li  className={css.items}>
      <img className={css.images} src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="#" />
      <p className={css.title}>{original_title}</p>
      </li>
      </Link>)
      
    return (

      <ul className={css.menu}>{elemets}</ul>
  
    )}
 export default HomePage