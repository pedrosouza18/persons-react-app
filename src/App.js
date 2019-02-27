import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        id: 'asfa1',
        name: "Pedro",
        age: 22
      },
      {
        id: 'zasaxsc',
        name: "Rafaela",
        age: 21
      },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (evt) => {
    this.setState({
      persons: [
        {
          name: evt.target.value,
          age: 21
        },
        {
          name: "Rafaela",
          age: 21
        },
      ]
    });
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
