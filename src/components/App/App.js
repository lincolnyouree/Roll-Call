import React, {Component} from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Welcome from '../../pages/Welcome/Welcome';
import Teachers from '../../pages/Teachers/Teachers';
import Students from '../../pages/Students/Students';

class App extends Component {
  state = {
    teachers: ['Ben', 'Linnae'],
    students: ['Melony', 'Alan', 'Michael', 'Lincoln']
  }

handleAdd = (name, role) => {
  this.setState(state => ({
    [role]: [...state[role], name]
  }))
} 

render () {

return (
    <div className="App">
      <header>
        <Link exact to="/">Home</Link><br></br>
        <Link exact to="/teachers">Teachers</Link><br></br>
        <Link exact to="/students">Students</Link><br></br>
      </header>
      <main>
    <h1>Teachers and Students</h1>
    <Route exact path="/" render={() => <Welcome /> }/>
    <Route exact path="/teachers" render={() => <Teachers teachers={this.state.teachers} handleAdd={this.handleAdd}/> }/>
    <Route exact path="/students" render={() => <Students students={this.state.students} handleAdd={this.handleAdd}/> }/>
    </main>
    </div>
  );
}}

export default App;
