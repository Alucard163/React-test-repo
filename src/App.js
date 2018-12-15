import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
     /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
        <div className="wrapper">
          <SayFullName name="Roman"  surname="Litvinenko" link="https://vk.com/romemix93"/>
          <SayFullName name="Lena"  surname="Petrova" link="https://facebook.com/"/>
          <SayFullName name="Sergey"  surname="Kuzmin" link="#"/>
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
        <h1> Моё имя {props.name}, фамилия - {props.surname}</h1>
        <a href={props.link}> Ссылка на мой профиль </a>
      </div>
    ) 
}

export default App;
