import React, { Component } from "react";
import Game from './Game';
import "./css1.css";
/*
var params={
   src:"/imgs/half.jpg",
   title:"half life 2",
   type:"fps"
};*/
/*
var tab=[
   {id:1,img:"/imgs/half.jpg",title:"half life 2",type:"fps"},
   {id:2,img:"/imgs/fear.jpg",title:"fear",type:"fps"},
   {id:3,img:"/imgs/counter.jpg",title:"counter",type:"fps"},
   {id:4,img:"/imgs/elmatador.jpg",title:"elmatador",type:"tps"}
];*/

/*
var data=tab.map(function(e){
   
console.log(e.title);
  return <Game param={e} />
});*/
/*
var data=tab.map(function(e){
     return <Game  
            id={e.id}
            src={e.img}
            title={e.title}
            type={e.type}
            />
   });*/
/*
   var data=tab.map(e =>
       <Game  
             id={e.id}
             src={e.img}
             title={e.title}
             type={e.type}
             />
    );*/



/*
export default function GameList()
{
   return(
   <>
   <div className="row"> 
      <TeamMember src="/imgs/half.jpg"  title="half life2" type="fps"/>
      
      <Game param={tab[0]} />
      <Game param={tab[1]} />
      <Game param={tab[2]} />
      <Game param={tab[3]} />
      
      {data}
   </div>
   </>
   );
}
*/
class GameList extends Component
{
   constructor()
   {
      super();
      this.state={
         tab:[
            {id:1,img:"/imgs/half.jpg",title:"half life 2",type:"fps"},
            {id:2,img:"/imgs/fear.jpg",title:"fear",type:"fps"},
            {id:3,img:"/imgs/counter.jpg",title:"counter",type:"fps"},
            {id:4,img:"/imgs/elmatador.jpg",title:"elmatador",type:"tps"}
         ]
      }
   }

 

  mapping(arr){
   var data=arr.map(e =>
     {
     return (<Game  
            id={e.id}
            src={e.img}
            title={e.title}
            type={e.type}
            />)
     });
   return data;
  }

   render()
   {
      return(
         <>
           <div className="row"> 
           {this.mapping(this.state.tab)}
           </div>
         </>
      );
   }

}

export default GameList;
