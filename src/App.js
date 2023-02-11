import  React from 'react';
import './App.css';
import Feed from "./Fedd";
import Header from "./Header";
import SideBar from "./Sidebar";
function App() {
  return ( 
    <div className="app">
  <Header />

  {/* App Body */}
  <div className="app_body">
    <SideBar/>
    <Feed/>
  {/* Widgets */} 
  </div> 
</div> 
);
}

export default App;
