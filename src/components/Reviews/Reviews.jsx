
import { useParams } from "react-router-dom" 
import { useState ,useEffect } from "react"
 import {getReviews} from 'ApiGetAxios/FilmsApi'
import css from 'components/Reviews/Reviews.module.css'

const Reviews = ()=>{
   const[reviews ,setReviews] = useState([])
   const {id}=useParams()

   useEffect(()=>{
      if(!reviews) return 
      const fetchReviews = async()=>{
       try {
         const data = await getReviews(id);
         setReviews(data)
       }
       catch({response}){
      console.log(response.data.message)
       }
      }
      fetchReviews()
   },[id])
   console.log('Компонент Reviews , його стан після Api запроса', reviews)
  
  const element = reviews.map(({id ,author , content })=>
  <li key={id} className={css.reviewstItems}>
   <p className={css.reviewstTitle}>{author }</p>
   <p className={css.reviewstText}>{content}</p>
  </li>)
  console.log(element)
  
   
   return(
   <ul className={css.reviewsList}>{element}</ul>
         )
}
export default Reviews