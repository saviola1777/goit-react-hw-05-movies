import { lazy, Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Loader from 'components/Loader/Loader';


const Home = lazy(() => import('Pages/Home/Home'));
const Movies = lazy(() => import('Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home/>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;