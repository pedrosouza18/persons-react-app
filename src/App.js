import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        id: 'asfa1',
        name: 'Max',
        age: 28
      },
      {
        id: 'zasaxsc',
        name: 'Rafaela',
        age: 21
      },
      {
        id: 'xasnxjsnc',
        name: 'Stephanie',
        age: 26
      },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (evt, id) => {    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // The best practice is create a copy of the object or array
    const person = {...this.state.persons[personIndex]};

    person.name = evt.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(evt) => this.nameChangeHandler(evt, person.id)}
                />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <button 
          onClick={this.togglePersonsHandler}
          style={style}
        >
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
