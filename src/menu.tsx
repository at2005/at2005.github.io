
function Menu ({setCurrentPage}:any) {
  return (
    <div>
        <nav>
            <ul>
            <li>
                <a href="#" onClick={() => setCurrentPage('home')}>Home</a>
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('work')}>Work</a>
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('blog')}>Blog</a>
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('books')}>Books</a>
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('about')}>About</a>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu;