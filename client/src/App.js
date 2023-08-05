import React, { Component } from 'react';
import group from './group.svg';
import Welcome from './components/Welcome';
import Support from './components/Support';


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
          <p>They are amazing, cool, fantastico</p>
          <Support />
        </hgroup>
      </article>
    </div>
    
    
  );
}

export default App;
