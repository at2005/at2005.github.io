import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './home';
import Blog from './blog';
// import cvPdf from './assets/new_cv.pdf';
// import './App.css';

// Add type declaration for PDF imports
declare module '*.pdf';

function Layout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;