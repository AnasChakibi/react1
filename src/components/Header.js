import React,{useState,useEffect} from "react";

/*
export default function Header()
{
   return(
   <>
   <div className="navbar text-white bg-dark rounded">
       <h2>THIS IS OUR GAMES</h2>
   </div>
 
   </>
   );
}
*/
///////////////////////
const Elem=()=>{

    const [color,setColor1]=useState("black");
    useEffect(()=>{
      setColor1("orange");
    },[]);
  
    var element=<h2 style={{color:color}}>THIS IS OUR GAMES</h2>;
    return(
    <>
    {element}
    </>
    );
};

////////////////////////////////////////////////
class Header extends React.Component
{
    
    constructor()
    {
        super();
        this.state={
            number1:11
        };    
     this.handler=this.handler.bind(this);
     this.testFunction=this.testFunction.bind(this)
     /*
     this.element=<h2 onClick={this.handler}>THIS IS OUR GAMES</h2>;*/

    /*
    this.element.style.color="red";*/
    }
    
    
   testFunction(){

/*
    this.state.number1=95;*/
/*
    var comp1=useRef(null);*/
    return this.state.number1;

   }
   handler()
   {
    /*
    this.setState(()=>{
        return{
            number1:150
        };

    });*/
    
    this.setState(function(){
        return{
            number1:151
        }
    });
    
   
/*
   this.testFunction();*/
   
   }

    render()
    {
        return(
            <>
            <div className="navbar text-white bg-dark rounded">
            <Elem />
            </div>
            </>
        );
    }

} 
export default Header;