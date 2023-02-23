import css from 'components/MoreMoviesButton/MoreMoviesButton.module.css'
import PropTypes from 'prop-types';

const MoreMoviesButton =({onClick })=>{ 
   
  return ( 
   <button onClick={onClick} className={css.buttonLoadMore}>Load more</button> 
  )
}

MoreMoviesButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default MoreMoviesButton