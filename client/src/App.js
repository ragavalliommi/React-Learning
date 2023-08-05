import group from './group.svg';

function App() {

  const name = "Stargazers";
  const nameColor = {
    color : "SteelBlue",
    backgroundColor : "Black"
  }

  return (
    <div className="container">
      <article>
      <hgroup>
          <img src={group} alt="StarGazers Group" />
          <h1>Meet the <i style={nameColor}>{name}</i></h1>
          <p>They are amazing, cool, fantastico</p>
          <button className="outline" onClick={() => alert("Hi there! We are StarGazers")}>Click me</button>
        </hgroup>
      </article>
    </div>
    
    
  );
}

export default App;
