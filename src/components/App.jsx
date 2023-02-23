// import {  Routes, Route } from "react-router-dom";
import Header from "./Header/Header"; 
// import Home from "../Pages/Home/Home";
// import Movies from "../Pages/Movies/Movies";
// import MovieDetails from "../Pages/MovieDetails/MovieDetails"
// import Cast from 'components/Cast/Cast'
// import Reviews from "components/Reviews/Reviews";

import AppRoutes from 'components/AppRoutes/AppRoutes'

export const App = () => {
  return (
    <>
     <Header/>
     <AppRoutes/>
     </>
   //   <Routes>
    //  <Route path="/" element={<Home />} ></Route>
     //   <Route path="/" element={<Home />} />
     //   <Route path="/movies" element={<Movies/>} />
      //  <Route path='/movies/:id' element={<MovieDetails/>}>
      //  <Route path="cast" element={<Cast />} />
      //  <Route path="reviews" element={<Reviews />} /> 
       //   </Route> 
       //  <Route path="*" element={<Home/>} />
      // </Routes> 
     
  )
};

