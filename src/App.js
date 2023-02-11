import  React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
function App() {
  return ( 
    <div className="app">
      <Router>
        <switch>
          <Route exact path="/" component={Login} />
        </switch>
      </Router>
    </div>
  {/*Header*/}
  <Header />

  {/* App Body */}
  {/* SideBar */}
  {/* Feed */}
  {/* Widgets */}  
    </div>
   
);
}

export default App;
