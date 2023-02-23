import { useParams } from "react-router-dom"   //щоб почитати динамічну частину маршруту
import { useState ,useEffect } from "react"
import {getPostById} from 'ApiGetAxios/FilmsApi' 
import css from '../MovieDetails/MovieDetails.module.css'
import { Link , Outlet} from "react-router-dom"


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
    console.log('Компонент MovieDetails його state ',state)
    const element = state?.genres.map(({name ,id})=><li className={css.genresName} key={id} >{name}</li>)
   return (
      <div className={css.wrapperMovies}>
      <img className={css.img} src={`https://image.tmdb.org/t/p/w400${state?.poster_path}`} alt="#" />
      
      
      <div>
      <h1>{state?.title}</h1>
      <p className={css.textVote}>Vote average: <span className={css.spanVote}>{state?.vote_average}</span></p>
      <h2>Overview</h2>
      <p className={css.text}>{state?.overview}</p> 
      <h2>Genres</h2>
      <ul className={css.genres}>{element}</ul>
      </div>
      <div className={css.wrapperButton}>
         <Link to={'Cast'}><button className={css.castButton}>Cast</button></Link>
         <Link to={'Reviews'}><button className={css.castButton}>Reviews</button></Link>
         <Outlet/>
      </div>
      </div>
      
   )
}

export default MovieDetails

//Link to={'Cast'}><button>Cast</button></Link>    ====посилання на цю сторінку to={'Cast'} значит що url остається батьківський тілки потім буде йти /Cast
//<Outlet/>  =====================================вствояє дочірню сторінку , тобто де буде <Outlet/> там буде відмальований дочірній елемент сторінки на якій ми знаходимося
// <Route path='/movies/:id' element={<MovieDetails/>}>==а оскільки ми знаходемося в MovieDetails
//<Route path="cast" element={<Cast />} />            ===а його дочірній елемент є <Cast />
//</Route>                                            ===то він нам відмалює те що знаходиться в цьому компоненті на цій сторінці передтим має бути <Link to={'Cast'}>