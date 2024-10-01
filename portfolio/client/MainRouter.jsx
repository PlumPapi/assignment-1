import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Layout from './components/Layout';
import './App.css';

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/projects" element={<Projects />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/services" element={<Services />} />
                        
                </Routes>
        </div>
        )
}
export default MainRouter
