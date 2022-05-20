import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';




const App = () => {
  return (
    <div  className='app-wrapper'>
      <Header/>
      <Navigation/>
      <Profile/>
      
      <footer></footer>
    </div>
  );
}

export default App;
