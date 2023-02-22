import { useParams } from "react-router-dom"   //щоб почитати динамічну частину маршруту
import { useState ,useEffect } from "react"
import {getPostById} from 'ApiGetAxios/FilmsApi' 
import css from '../MovieDetails/MovieDetails.module.css'


const MovieDetails =()=>{
    const[state ,stateMoviesId] = useState()
    const {id}=useParams()  //повертає динамічну частину те що було прописано через двокрапку в адресі стало ключем а рекальне значення його ключем
   useEffect(()=>{
      const fetchDetails = async()=>{
       try {
         const result = await getPostById(id);
         stateMoviesId(result)
 
       }
       catch({response}){
      console.log(response.data.message)
       }
      }
      fetchDetails()
   },[id])
    console.log(state)
    const element = state?.genres.map(({name ,id})=><li className={css.genresName} key={id} >{name}</li>)
   return (
      <div className={css.wrapperMovies}>
      <img className={css.img} src={`https://image.tmdb.org/t/p/w400${state?.poster_path}`} alt="" />
      <div>
      <h1>{state?.title}</h1>
      <p className={css.textVote}>Vote average: <span className={css.spanVote}>{state?.vote_average}</span></p>
      <h2>Overview</h2>
      <p className={css.text}>{state?.overview}</p> 
      <h2>Genres</h2>
      <ul className={css.genres}>{element}</ul>
      </div>
      </div>
   )
}

export default MovieDetails

//<Route path='/movies/:id' element={<MovieDetails/>}></Route>  
// <Link to={`/movies/${id}`} key={id} className={css.link}>  
// const params=useParams()  //повертає динамічну частину те що було прописано через двокрапку в адресі стало ключем а рекальне значення його ключем