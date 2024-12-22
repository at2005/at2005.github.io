import { useState } from 'react'
import Home  from './home';
import './App.css';
import Menu from './menu';
import Blog from './blog';
import Books from './books';
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [locations, setLocations] = useState(['library', 'home', 'blog']);

  const setPageWithLocationSwap = (location: string) => {
    if (location === currentPage || location === "") return;
    // what we want to do, is basically 
    // arr[i] = arr[i +/- some_rot_factor (mod N)], where the sign of the rotation factor is determined
    // by which side of the central directory we are at
    // so if we are on the left side, we want to rotate rightwards, and so we'll say that some_rot_factor < 0, and vice versa
    // if rot_factor < 0, then we add it to i mod N to fetch the new index
    // however, if index is negative then we do N - abs(index) to get new index bc stuff
    // if rot_factor > 2, then we can just index with no problem bc stuff is positive and within bounds
    setCurrentPage(location);
    const index_to_rot = (locations.indexOf(location) - 1);
    const new_locations = locations.map((_, i) => {
      let new_index = (i + index_to_rot) % locations.length;
      if (new_index < 0) new_index += locations.length;
      return locations[new_index];
    });

    setLocations(new_locations);
  }

  return (
    <>
      <Menu setCurrentPage={setPageWithLocationSwap} locations={locations}/>
      {(currentPage === "home" || currentPage === "") && <Home/>}
      {currentPage === "blog" && <Blog/>}  
      {currentPage === "library" && <Books/>}  
    </>
  )
}

export default App;