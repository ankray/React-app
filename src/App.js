import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';
import './CharComponent/CharComponent.css';
import { withTranslation } from 'react-i18next';


class App extends Component {
  state = {
    persons: [
      {id: '111', name: 'Max', age: 28},
      {id: '222', name: 'Manu', age: 29},
      {id: '333', name: 'Stephanie', age: 26}
    ],
    showPersons: false,
    inputText: ''
  };

  changeInputHandler = (event) => {
    this.setState({inputText: event.target.value});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  deleteChars = (charIndex) => {
    const chars = this.state.inputText.split('');
    chars.splice(charIndex, 1);
    const updatedChars = chars.join('');
    this.setState({inputText: updatedChars});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const { t, i18n } = this.props;

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              id={person.id}
              changed={(event) =>this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    const printChars = this.state.inputText.split('').map((ch, index) => {
      return <CharComponent
        click={() => this.deleteChars(index)}
        character={ch}
        key={index} />
    });

    return (
      <div className="App">
        <h1>
          { this.props.t('demo.welcome_to_react', { framework: "react-i18next" }) }
        </h1>
        <div>
          <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
          <button onClick={() => i18n.changeLanguage('en')}>en</button>
        </div>
        <br/>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch name
        </button>
        {persons}
        <hr />
        <input type="text" onChange={this.changeInputHandler} value={this.state.inputText}/>
        <p>{this.state.inputText}</p>
        <Validation text={this.state.inputText} inputLength={this.state.inputText.length}/>
        {printChars}
      </div>
    );
  }

}

export default withTranslation('common')(App);
