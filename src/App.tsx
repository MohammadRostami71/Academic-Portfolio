import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import ContactMe from "./pages/ContactMe";
import Gallery from "./pages/Gallery";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/Blog/PostDetail";

function App() {
    return (
            <Routes>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/courses' element={<Courses/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/blog/:id' element={<PostDetail/>}/>
                <Route path='/contactMe' element={<ContactMe/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/article' element={<Article/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
    );
}

export default App;