import logo from './logo.svg';
import './App.css';
import Para from './components/Para';
import Header from './components/Header';
import GameList from './components/GameList';
import React,{useState,useEffect} from "react";
/*
function App() {
  return (
    <>
    <div id="div1" className="container">
      <Header/>
      <GameList/>
    </div>
    </>
  );
}

export default App;*/

/*
const Header=()=>{
    
  const [color,setColor]=useState("black");
  setColor("orange");
  var element=<h2 style={{color:color}}>THIS IS OUR GAMES</h2>;

  return(  
            <div className="navbar text-white bg-dark rounded">
            {element}
            </div>  
  );
};
*/


const App=()=>{
/*
  const [color,setColor]=useState("black");

  useEffect(()=>{
    setColor("orange");
  },[]);


 
  var element=<h2 style={{color:color}}>THIS IS OUR GAMES</h2>;
*/
return(
    <>
    <div id="div1" className="container">
     <Header/>
     <GameList/>
    </div>
    </>);
}


export default App;