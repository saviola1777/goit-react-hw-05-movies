  import { getAxios } from 'ApiGetAxios/FilmsApi'
  import { useState, useEffect, } from 'react'
  import css from 'components/HomePage/HomePage.module.css'
  import { Link } from 'react-router-dom'

  const HomePage = () => {
    const [items, itemsState] = useState([]);
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          // const resault = await getAxios()  ===пренесе нам всі дані включно с results 
          const { results } = await getAxios()
          itemsState(results)
        }
        catch (error) {
          console.log(error)
        }
      }
      fetchPosts();
    }, [])
    console.log(items)
    const elemets = items.map(({ id,poster_path ,original_title}) =>
     <Link to={`/movies/${id}`} key={id} className={css.link}>
     <li key={id} className={css.items}>
      <img className={css.images} src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="#" />
      <p className={css.title}>{original_title}</p>
      </li>
      </Link>)
      
    return (

      <ul className={css.menu}>{elemets}</ul>
  
    )}
 export default HomePage