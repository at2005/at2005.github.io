
function Menu ({setCurrentPage}:any) {
  return (
    <div className="MainMenu">
        <nav>
            <ul>
            <li>
                <a href="#" onClick={() => setCurrentPage('home')}>HOME</a>
            </li>
            <li>
                |
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('work')}>WORK</a>
            </li>
            <li>
                |
            </li> 
            <li>
                <a href="#" onClick={() => setCurrentPage('blog')}>BLOG</a>
            </li>
            <li>
                |
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('books')}>LIBRARY</a>
            </li>
            <li>
                |
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('about')}>ABOUT</a>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu;