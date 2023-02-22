import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./Header/Header"; 
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import MovieDetails from "../Pages/MovieDetails/MovieDetails"



export const App = () => {
 
  
  return (
    <BrowserRouter>
    
     <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path='/movies/:id' element={<MovieDetails/>}></Route> 
        <Route path="*" element={<Home/>} />
       
      </Routes>
     </BrowserRouter>
  );
};

// Компонент <BrowserRouter> ===Управляє  маршрутизацією, в ньомувся логіку взаємодії із історією браузера. Створює маршуртизатор та об'єкт історії навігації, щоб синхронізувати інтерфейс із URL-адресою.Передає інформацію про поточний стан історії навігації всім нащадкам. Все, що необхідно зробити, це обернути компонентом <BrowserRouter> всі програми.

// Компоненти <Route> та <Routes>  ======  Компонент <Route> дозволяє пов'язати певний URL з деяким компонентом. Наприклад, якщо ми хочемо відображати компонент <About> коли користувач переходить шляхом /about, необхідно буде описати такий маршрут.

// <Route path="/ === шлях за який компонент відповідає . Якщо знаходить цю адресу малює цей компонент .Коли змінюється адреса він перевіряє всі роути порівнює  path="/" і малює той алемент який знаходить
 
//<Route path='/movies/posts/:id' element={<SinglePost/>}></Route>  === Динамічне значеня :id -зміна в яку він буде зберігатися це динамічне значення яке змінюється