import React,{Component} from "react";

import "./css1.css";
/*
function Para()
{
  return(

   <p>paragraphe1</p>

  );

}
*/
class Para extends Component{

  
    constructor(){
        super()
        this.state={answer:"yes"};
        /*
        this.wa3={answer:"no"};*/
    }
    wa3={answer:"no"};
    /*
    name="wa3"
    method1(param){
     return <span>{param}</span>
    }*/
    
    render(){
        /*
        var name="wa3"*/
        /*
        const span=this.method1("ANAS")*/
        return(
            <>
        <p>do you love me {this.wa3.answer}</p>
            </>
        );
    }
}




export default Para;
/*
document.querySelector("p").style.color="red";*/
/*
document.getElementById("1").style.color="red";*/
/*
document.querySelector("one").style.color="red";*/

