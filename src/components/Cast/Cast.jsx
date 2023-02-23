// import { useState, useEffect, } from 'react'
import { useParams } from "react-router-dom" 
import { useState ,useEffect } from "react"
import {getCast} from 'ApiGetAxios/FilmsApi'
import css from 'components/Cast/Cast.module.css'

const Cast = ()=>{
   const[cast ,setCast] = useState([])
   const {id}=useParams()

   useEffect(()=>{
      const fetchCast = async()=>{
       try {
         const data = await getCast(id);
         setCast(data)
       }
       catch({response}){
      console.log(response.data.message)
       }
      }
      fetchCast()
   },[id])
   
  
  const element = cast.map(({id,profile_path, name , character  })=>
  <li key={id} className={css.castItems}>
   <img className={css.castImg} src={`https://image.tmdb.org/t/p/w400${profile_path}`} alt="#" />
   <div  className={css.wrapperName}>
   <p className={css.castText}>{name}</p>
   <p className={css.castText}>Character :{character}</p>
   </div>
  </li>)

   //  console.log('Компонент Cast , його стан після Api запроса', cast)
   return(
      
      <ul className={css.castList}>{element}</ul>
     
       )
}
export default Cast