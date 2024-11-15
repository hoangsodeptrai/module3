import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListComponent from './components/Student/ListComponent';


const studenList=[
  {
    id:1,
    name:'Hoang',
    address:'Ha Noi',
  },
  {
    id:2,
    name:'Anh Chanh',
    address:'Da Nang',
  },
  {
    id:3,
    name:'SuperMan',
    address:'Ha Noi',
  }
]
function App() {
  return (
  <>
  <HeaderComponent/>
  <ListComponent list={studenList} size={12}/>
  <FooterComponent/>
  
  
  </>
    
  );
}

export default App;
