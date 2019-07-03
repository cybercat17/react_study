import React from 'react'

const Students = ({ students, delStudent }) => {
  const studentList = students
    .filter(student => {
      return student.age >= 20;
    })
    .map(student => {
      return (
        <div className="student" key={ student.id }>
          <div>Name : { student.name }</div>
          <div>Age : { student.age }</div>
          <div>Grade : { student.grade }</div>
          <button onClick={ () => { delStudent(student.id) } }>Delete</button>
        </div>
      );
    });
  return (
    <div className="student-list">
      { studentList }
    </div>
  );
}

export default Students;