import React, { Component } from 'react';
import Students from './Students';
import AddStudent from './AddStudent';

class App extends Component {
  state = {
    students : [
      { name: 'cybercat', age: 22, grade: 3, id: 1 },
      { name: 'coldfish', age: 31, grade: 4, id: 2 },
      { name: 'doughnut', age: 12, grade: 1, id: 3 }
    ]
  }
  addStudent = (student) => {
    student.id = Math.random();
    let students = [...this.state.students, student];
    this.setState({
      students : students
    })
  }
  delStudent = (id) => {
    let students = this.state.students.filter(student => {
      return student.id !== id;
    })
    this.setState({
      students : students
    })
  }
  componentDidMount() {
    console.log('Component <App> mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h2>Hello React</h2>
        <Students students={ this.state.students } delStudent= { this.delStudent } />
        <AddStudent addStudent={ this.addStudent }/>
      </div>
    );
  }
}

export default App;
