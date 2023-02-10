import { nanoid } from 'nanoid'
const myItems = [
   {
      id: nanoid(3),
      text: "Home",
      link: "/"
   },
   {
      id: nanoid(3),
      text: "Movies",
      link: "/movies"
   },
   // {
   //    id: nanoid(3),
   //    text: "MovieDetails",
   //    link: "/movies/:movieId"
   // },
   // {
   //    id: nanoid(3),
   //    text: "Cast",
   //    link: "/movies/:movieId/cast"
   // },
   // {
   //    id: nanoid(3),
   //    text: "Reviews",
   //    link: "/movies/:movieId/reviews"
   // },

]

export default myItems