import logo from './logo.svg';
import './App.css';
import Movies from "./components/Movies";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import Movie from "./components/Movie";
import Actors from "./components/Actors";
import Filmography from "./components/Filmography";
import Home from "./components/Home";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/actors" element={<Actors/>}/>
                <Route path="/actors/:id" element={<Filmography/>}/>
            </Routes>
        </>

        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
