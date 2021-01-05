import  React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {

  state =  {
    persons: [
      { name: 'Chris', age: 20 },
      { name: 'Saul', age: 210 },
      { name: 'Ronaldo', age: 30 }
    ],
    otherState: 'some value'
  };

  switchNames = (newName) => {
    
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'SaulX', age: 210 },
        { name: 'RonaldoX', age: 30 }
      ]
    });

  }

  nameChangeHandler = (event) =>  {

    this.setState({
      persons: [
        { name: 'ChrisXX', age: 20 },
        { name: event.target.value, age: 210 },
        { name: 'RonaldoX', age: 30 }
      ]
    });

  }
  
  render() { 
    return(

      <div className="App">
        
          <h1>Hi, Mi firsty app</h1>
  
          <button onClick={ () => this.switchNames('Performance Chris New Name ') } >click me! </button>
  
          <Person name={this.state.persons[0].name} age="30" ></Person>
  
          <Person 
            name={this.state.persons[1].name} 
            age="25"
            click={this.switchNames.bind(this, 'use Binding')}
            changed={this.nameChangeHandler} >
            My Hobies: Racing 
          </Person>
  
          <Person name={this.state.persons[2].name} age="16"></Person>

      </div>
    )
  }

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