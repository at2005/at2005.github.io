import { useState } from 'react'
import Home  from './home';
import './App.css';
import Menu from './menu';
import Blog from './blog';
import Work from './work';
import About from './about';
import Books from './books';

function App() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <>
      <Menu setCurrentPage={setCurrentPage}/>
      {currentPage === "home" && <Home/>}
      {currentPage === "work" && <Work/>}
      {currentPage === "about" && <About/>}
      {currentPage === "blog" && <Blog/>}  
      {currentPage === "books" && <Books/>}  
    </>
  )
}

export default App;
