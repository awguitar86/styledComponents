import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './App.css';

const Header = styled.header`
  width: 100vw;
  height: 50px;
  background-color: palevioletred;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background: ${props => props.body ? 'white' : 'papayawhip'};
  height: 100px;
  width: ${props => props.body ? '50vw' : '100vw'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.body ? 'solid 1px palevioletred' : 'none'};
`;

const Title = styled.h1`
font-size: ${props => props.primary ? '24pt' : '14pt'};
text-align: center;
color: ${props => props.primary ? 'white' : 'palevioletred'};
font: Verdana;
`;

const Button = styled.button`
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: ${props => props.primary ? 'palevioletred' : 'white'};
color: ${props => props.primary ? 'white' : 'palevioletred'};
border: 2px solid palevioletred;
width: 150px;
height: 40px;
font-size: 10pt;
`;

const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: palevioletred;
background: papayawhip;
border: none;
border-radius: 3px;
`;

class App extends Component {
  render() {
    return (
      <div className={this.props.classname}>
        <Header>
          <Title primary>Styled Components</Title>
        </Header>
        <Wrapper>
            <Title>
              Hello World, this is my first styled component!
            </Title>
        </Wrapper>

        <Wrapper body>
          <Input placeholder="@mxstbr" type="text"/>
          <Input value="@geelen" type="text" />
          <Button>I'm a styled button</Button>
          <Button primary>Primary Button</Button>
        </Wrapper>

      </div>
    );
  }
}

export default App;
