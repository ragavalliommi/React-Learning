import React, { Component } from 'react';
import group from './group.svg';

//Compenents are UI pieces that can be reused
//props - used to pass put to the 
//Class Component

class Welcome extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return <h1>Meet the {this.props.name}</h1>
  }
}

//Hooks
const Welcome2 = (props) => {
  return <h1>Meet the {props.name}</h1>
};

function App() {

  // const name = "Stargazers";
  // const nameColor = {
  //   color : "SteelBlue",
  //   backgroundColor : "Black"
  // }

  return (
    <div className="container">
      <article>
      <hgroup>
          <img src={group} alt="StarGazers Group" />
          {/* <h1>Meet the <i style={nameColor}>{name}</i></h1> */}
          <Welcome name="StarGazers" />
          <Welcome2 name="StarViewers" />
          <p>They are amazing, cool, fantastico</p>
          <button className="outline" onClick={() => alert("Hi there! We are StarGazers")}>Click me</button>
        </hgroup>
      </article>
    </div>
    
    
  );
}

export default App;
