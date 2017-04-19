import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';
import Form from './Form';

const NameDiv = styled.div`
  color: green;
`;

const AnotherDiv = styled(NameDiv)`
  color: blue;
`;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      person: null,
      submittedPerson: ''
    }
  }

  componentWillMount () {
    axios.get('https://swapi.co/api/people/1/')
    .then(response => {
      const { data: person } = response;
      console.log('this is person', person)
      this.setState({ person });
    })
    .catch(function (error) {
      console.log('error', error);
    });
  };

  render() {
    const styles = this.styles();
    const randomNumCondition = (Math.floor(Math.random() * 10)) % 2 === 0;

    return (
      <div className="App">
        <NameDiv>
          {this.state.person && this.state.person.name}
        </NameDiv>

        <AnotherDiv>
          {this.state.person && this.state.person.eye_color}
        </AnotherDiv>

        <div style={styles.mass}>
          {this.state.person && this.state.person.mass}
        </div>

        <Form
          buttonTitle='Click to see if This Person is a Baller'
          handleSubmit={(inputValue) => {
            this.setState({
              submittedPerson: inputValue
            })
          }}
        />

      {this.state.submittedPerson && (
        <div>{randomNumCondition ? 'Yep,' : 'Nope,'} {this.state.submittedPerson} is {!randomNumCondition && 'not'} a Baller</div>
      )}

      </div>
    );
  };

  styles () {
    return {
      name: {
        color: 'red',
        fontSize: 40
      },
      eyeColor: {
        // color: 'blue'
      },
      mass: {
        fontWeight: 400
      }
    }
  }
}

export default App;
