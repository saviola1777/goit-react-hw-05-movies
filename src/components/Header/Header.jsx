import { NavLink } from "react-router-dom"       // Щоб адреса змінювалася а сторінка не перезавантажувалася додаємо компонент Link з react-router-dom
import myItems from "components/Header/items"
import css from 'components/Header/Header.module.css'

const Header = () => {
   const elemets = myItems.map(({ id, text, link }) => <li key={id} className={css.items}>
      <NavLink to={link} className={css.link}>{text}</NavLink>
   </li>)
   return (
      <ul className={css.menu}>{elemets}</ul>
   )
}

export default Header

// import { Link } from "react-router-dom"     // Щоб адреса змінювалася а сторінка не перезавантажувалася додаємо компонент Link з react-router-dom перед тим установка пакта через npm
// <Link to={link}>{text}</Link>    //Замість (а)- посилання ставимо компонент link а замість href="" , тут використовується  to . Він просто змінює адрес
//{ NavLink } -те саме що Link відмінвсть що він показує яке є авктивне тобто там де ми знаходися но url воно буде активне і можливо підсвідчуватиметься вншим кольором 