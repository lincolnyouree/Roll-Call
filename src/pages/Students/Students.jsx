import React from 'react';
import Student from '../../components/Student/Student';
import AddPerson from '../../components/AddPerson/AddPerson';

function Students({students, handleAdd}) {
    return (
        <div>
            <h1>Students</h1>
            <ul>
                {students.map((name) => <Student name = {name}/>)}  
            </ul>
            <AddPerson role='students' handleAdd={handleAdd}/>
        </div>
    )
}

export default Students;