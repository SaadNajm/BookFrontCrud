import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
function App() {
  const [currentRoute, setCurrentRoute] = useState();
  useEffect(()=>{
     const path= window.location.pathname.toLocaleLowerCase()
     setCurrentRoute(path.slice(1,path.length))
  },[])
  return (
   <BrowserRouter>
   <nav className="m-1 p-1 border border-info">
        <ul className="nav na-pills">
          <li>
            
            <Link
              onClick={()=>{
                return(
                  setCurrentRoute("home")
                )
              }}
              className={
                currentRoute === "home"
                  ? "btn btn-info ms-1"
                  : "btn btn-outline-info ms-1"
              }
              to="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
            onClick={()=>{
              return(
                setCurrentRoute("books")
              )
            }}
              className={
                currentRoute === "books"
                  ? "btn btn-info ms-1"
                  : "btn btn-outline-info ms-1"
              }
              to="/books"
            >
              Books
            </Link>
          </li>
        </ul>
      </nav>
   

   <Routes>
   <Route path="/home" element={<Home />}></Route>
   <Route path="/books" element={<Books />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
