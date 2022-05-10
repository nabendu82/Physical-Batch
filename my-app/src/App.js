import './App.css';
// import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greeting name="JavaScript" />
      <Greeting name="Golang" />
      <Greeting name="Swift">Language for iOS</Greeting>
      <hr />
      <Welcome name="Cobol" />
      <Welcome name="Kotlin" />
      <Welcome name="Java"><button>Click</button></Welcome>
    </div>
  );
}

export default App;
