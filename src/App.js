import  React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {

  state =  {
    persons: [
      { id: 1,  name: 'Chris', age: 20 },
      { id: 2, name: 'Saul', age: 210 },
      { id: 3, name: 'Ronaldo', age: 30 }
    ],
    otherState: 'some value',
    showPersons: false
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

  nameChangeHandler = (event, id) =>  {

    // 1 -- find person 
    const foundPersonIndex = this.state.persons.findIndex( obj => obj.id === id );

    // 2 -- copy person properties
    const newPerson = {...this.state.persons[foundPersonIndex]};

    // update valie live
    newPerson.name = event.target.value;

    // update array
    const persons = [...this.state.persons];
    persons[foundPersonIndex] = newPerson;

    // update State
    this.setState({ persons: persons })

  }

  togglePersonsHandler = () => {

    const showIt = this.state.showPersons;
    
    this.setState({ showPersons: !showIt });
  }

  delPerson = ( id ) => {

      const tempArray =  [...this.state.persons];
      tempArray.splice(id, 1);
      this.setState( { persons: tempArray } )
  }
  
  render() { 

    const style = {
        backgroundColor: 'white',
        border: '1px solid blue',
        cursor: 'pointer'
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
          <div >
            {
              this.state.persons.map( (person, index) =>  {
                console.log('person is', person);
                return <Person
                    click={this.delPerson.bind(this, index)}
                    name={person.name}
                    age={person.age}
                    key={person.id} 
                    changed={ (event) => this.nameChangeHandler(event, person.id ) } />
              })
            }
          </div>
      );
    }

    return(

      <div className="App">

          <h1>Hi, Mi firsty app</h1>
  
          {/* onClick={ () => this.switchNames('Performance Chris New Name ') } >  */}

          <button 
            style ={style}
            onClick={this.togglePersonsHandler} >  
            Show/Hide Persons 
          </button>

          {persons}
          
  
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


/* *********** ANOTHER IF TYPE

  {
    this.state.showPersons === true ?

      <div >

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
    :
      null
  }

*/


/*  ******* OLD PERSONS ******
  <Person name={this.state.persons[0].name} age="30" ></Person>
  <Person 
    name={this.state.persons[1].name} 
    age="25"
    click={this.switchNames.bind(this, 'use Binding')}
    changed={this.nameChangeHandler} >
    My Hobies: Racing 
  </Person>
  <Person name={this.state.persons[2].name} age="16"></Person>
*/

