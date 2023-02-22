import { useState } from 'react' ;
import css from 'components/MoviesSearch/MoviesSearch.module.css'

const MoviesSearch =({onSubmit})=>{
  
 const[search, searchState]= useState('')
 console.log(search)
  
 const onHendleSubmit = (e) => {
   e.preventDefault(); 
   onSubmit(search);
   searchState('')
  }
  
 return(
  <header className={css.searchbar}>
    <form className={css.form}  onSubmit={onHendleSubmit}> 
      <input
        onChange={e => searchState(e.target.value)}
        name="search"
        value={search}
        type="text"
        autoComplete="off"
        placeholder="Search movies"
        autoFocus
        required
        className={css.input}
      />
         <button type="submit" className={css.button}>
        <span className={css.span}>Search</span>
      </button>
    </form>
  </header>
      )
}

export default MoviesSearch

