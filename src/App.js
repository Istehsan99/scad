import './App.css';

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import NavBar from './component/NavBar';
import News from './component/News';
import Footer from './component/Footer';
import ErrorPage from './pages/ErrorPage';
const App = ()=> {
    return (
      <div>
        <Router>
   <NavBar/>
   <Routes>
<Route path='*' element={<ErrorPage/>} />
<Route exact path='/' element={<News key="general" pageSize={9} country="in" category="general" />} />
<Route exact path='/business' element={<News key="business" pageSize={9} country="in" category="business"/>} />
<Route exact path='/entertainment' element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />} />
<Route exact path='/general' element={<News key="general" pageSize={9} country="in" category="general" />} />
<Route exact path='/health' element={<News key="health" pageSize={9} country="in" category="health" />} />
<Route exact path='/science' element={<News key="science" pageSize={9} country="in" category="science" />} />
<Route exact path='/sports' element={<News key="sports" pageSize={9} country="in" category="sports" />} />
<Route exact path='/technology' element={<News key="technology" pageSize={9} country="in" category="technology" />} />

    </Routes>
   <Footer/> 
       </Router>
      </div>
    )
  }
  export default App;

