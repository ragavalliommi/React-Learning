import Welcome from './components/Welcome';
import Support from './components/Support';
import ListCast from './components/ListCast';

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
          <img src="images/group.svg" alt="StarGazers Group" />
          {/* <h1>Meet the <i style={nameColor}>{name}</i></h1> */}
          <Welcome name="StarGazers" />
          <p>They are amazing, cool, fantastico</p>
          <Support />
          <ListCast />
        </hgroup>
      </article>
    </div>
    
    
  );
}

export default App;
