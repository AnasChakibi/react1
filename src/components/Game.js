import React from "react";




/*

export default function Game(props)
{
   return(
   <>
   <div className="col-md-4 col-sm-6">
      <div className="card" style={{backgroundColor:props.type==="tps"?"orange":"white"}}>
         <div className="card-header">
          <img className="cardImg" src={props.src} />
         </div>
         <div className="card-body">
          <h2>{props.title}</h2>
          <h3>{props.type}</h3>
         </div>
      </div>
   
   </div>

   </>
   );
}*/

class Game extends React.Component
{
   constructor(){
      super();
      this.state={num:0};
      this.clickHandler=this.clickHandler.bind(this);
   }
  

   clickHandler(){
      /*
      this.setState({
       num:1
      });*/
      this.setState(function(prev){
         return {
            num: prev.num+1
         }
        });
   }

  render(){
   return(
   <>
   <div onClick={this.clickHandler} className="col-md-4 col-sm-6">
      <div className="card" style={{backgroundColor:this.props.type==="tps"?"orange":"white"}}>
         <div className="card-header">
          <img alt="gr" className="cardImg" src={this.props.src} />
         </div>
         <div className="card-body">
          <h2>{this.props.title}</h2>
          <h3>{this.props.type}</h3>
          <h3>{this.state.num}</h3>
         </div>
      </div>
   
   </div>
   </>
   );
  }

}
export default Game;
