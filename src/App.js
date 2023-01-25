import './App.css';
import React, { Component, useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setprogress] = useState(10)
  
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} setProgress={setprogress} key={"general"} pageSize={pageSize} country="in" category="general" />} />
          <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setprogress} key={"business"} pageSize={pageSize} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setprogress} key={"entertainment"} pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setprogress} key={"health"} pageSize={pageSize} country="in" category="health" />} />
          <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setprogress} key={"science"} pageSize={pageSize} country="in" category="science" />} />
          <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setprogress} key={"sports"} pageSize={pageSize} country="in" catcategoryogery="sports" />} />
          <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setprogress} key={"technology"} pageSize={pageSize} country="in" category="technology" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;