import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-left: 10px;
  border: 1px solid dodgerblue;
  border-radius: 2px;
  background-color: #FFF;
  cursor: pointer;
  &:hover {
    background-color: dodgerblue;
    color: white;
  }
`


class Form extends Component {
  constructor () {
    super();

    this.state = {
      inputValue: ''
    }
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  };

  render () {
    return (
      <div>
        <input
          onChange={this.handleChange}
        />
        <StyledButton
          onClick={this.props.handleSubmit.bind(null, this.state.inputValue)}
        >
          {this.props.buttonTitle}
        </StyledButton>
      </div>
    )
  }
}

module.exports = Form;
