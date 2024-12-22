
function Menu ({setCurrentPage, locations}:any) {
let menuItems = locations.map((location : any, i : number) => {
     const id_css = i === 1 ? "current" : "";
      return (
        <>
        {i === 0 ? null : 
        <li>
            |[o]|
        </li>}
      <li key={location}>
        <a id={id_css} href="#" onClick={(e) => {e.preventDefault(); setCurrentPage(location);}}>{location.toUpperCase()}</a>
        </li>
        </>
    );});

  return (
    <div className="MainMenu">
        <nav>
            <ul>
            {menuItems}
            </ul>
        </nav>
    </div>
  )
}

export default Menu;