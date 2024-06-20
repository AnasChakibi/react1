/*
import logo from './logo.svg';*/
import './App.css';
/*
import Para from './components/Para';*/
/*
import Header from './components/Header';
import GameList from './components/GameList';*/
import React,{useState} from "react";



 const App=()=>{
    // eslint-disable-next-line
    const [colors,setColors]=useState(["black","black","black"]);
    
    function changeColor(){
        /*
     const newColors=[...colors];
     newColors[index]="red";
     setColors(newColors);*/

/*

onClick={()=>changeColor(index)}*/


     alert("grrrrr");
    };

    return(
        <>
        {colors.map(function(color,index){
         return  <p
         key={index}
         style={{color:color}} 
         onClick={changeColor}
         >
          paragraph {index+1}
         </p>
        })
        }
        </>
    );

};



export default App;