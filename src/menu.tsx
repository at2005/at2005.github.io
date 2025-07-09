import { useState } from 'react';

function Menu ({setCurrentPage, locations}:any) {
  // Add state for menu visibility
  const [isOpen, setIsOpen] = useState(false);

  let menuItems = locations.map((location : any, i : number) => {
    const id_css = i === 1 ? "current" : "";
    return (
      <li key={location}>
        <a 
          id={id_css} 
          href="#" 
          onClick={(e) => {
            e.preventDefault(); 
            setCurrentPage(location);
            setIsOpen(false); // Close menu after selection
          }}
        >
          {location.toUpperCase()}
        </a>
      </li>
    );
  });

  return (
    <div className="MainMenu">
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav 
        className={isOpen ? 'active' : ''}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul>
          {menuItems}
        </ul>
      </nav>
    </div>
  )
}

export default Menu;