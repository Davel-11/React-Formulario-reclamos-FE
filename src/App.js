import  React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personState, setPersonState] =  useState({
    persons: [
      { name: 'Chris', age: 20 },
      { name: 'Saul', age: 210 },
      { name: 'Ronaldo', age: 30 }
    ],
    otherValue: 'some value'
  });

  const [otherState, setOtherState] =  useState({otherValue: 'some value'});

  console.log('personState ', personState);
  console.log('otherState ', otherState);

  const switchNames = (newName) => {
    
    setPersonState({
      persons: [
        { name: newName, age: 20 },
        { name: 'SaulX', age: 210 },
        { name: 'RonaldoX', age: 30 }
      ]
    });

  }

  return(
    <div className="App">
        <h1>Hi, Mi firsty app</h1>

        <button onClick={ () => switchNames('Performance Chris New Name ') } >click me! </button>

        <Person name={personState.persons[0].name} age="30" ></Person>

        <Person 
          name={personState.persons[1].name} 
          age="25"
          click={switchNames.bind(this, 'use Binding')}> 
          My Hobies: Racing 
        </Person>

        <Person name={personState.persons[2].name} age="16"></Person>
    </div>
  )

}


export default App;

/* Bef class 44 *************

  state = {
    persons: [
      { name: 'Chris', age: 15 },
      { name: 'Saul', age: 15 },
      { name: 'Ronaldo', age: 15 }
    ]
  }

  switchNames = () => {
    console.log('I was clicked');

    this.setState({
      persons: [
        { name: 'ChrisX', age: 20 },
        { name: 'SaulX', age: 210 },
        { name: 'RonaldoX', age: 30 }
      ] 
    });
  }

  render() {
    return (

      // <div className="App">
      //     <h1>Hi, Mi firsty app</h1>
      //     <Person name="Chris" age="30" ></Person>
      //     <Person name="Saul" age="25"> My Hobies: Racing </Person>
      //     <Person name="Ronaldo" age="16"></Person>
      // </div>

      <div className="App">
          <h1>Hi, Mi firsty app</h1>
          <button onClick={this.switchNames} >click me! </button>
          <Person name={personState.persons[0].name} age="30" ></Person>
          <Person name={personState.persons[1].name} age="25"> My Hobies: Racing </Person>
          <Person name={personState.persons[2].name} age="16"></Person>
      </div>


    );
  }

*/