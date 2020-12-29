import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">

        {/* Title */}
        <h1>Hi, Mi firsty app</h1>

        {/* Component One */}

        <Person name="Chris" age="30" ></Person>

        <Person name="Saul" age="25"> My Hobies: Racing </Person>

        <Person name="Ronaldo" age="16"></Person>

    </div>
  );
}

export default App;
