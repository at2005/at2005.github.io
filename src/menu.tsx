
function Menu ({setCurrentPage}:any) {
  return (
    <div>
        <nav>
            <ul>
            <li>
                <a href="#" onClick={() => setCurrentPage('home')}>HOME</a>
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('work')}>WORK</a>
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('blog')}>BLOG</a>
            </li>
            <li>
                <a href="#" onClick={() => setCurrentPage('books')}>MEDIASHELF</a>
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