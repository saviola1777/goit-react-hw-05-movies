import css from 'components/MoreMoviesButton/MoreMoviesButton.module.css'
import PropTypes from 'prop-types';

const MoreMoviesButton =({onClick })=>{   //  при кліку передажться loadMore=()=>{this.setState(prevState=>({page:prevState.page+1}))} оновлюж page:+1 і тому  додаються  нові картинки
   
  return ( 
   <button onClick={onClick} className={css.buttonLoadMore}>Load more</button> 
  )
}

MoreMoviesButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default MoreMoviesButton