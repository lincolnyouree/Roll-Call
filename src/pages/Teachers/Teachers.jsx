import React from 'react';
import Teacher from '../../components/Teacher/Teacher';
import AddPerson from '../../components/AddPerson/AddPerson';

function Teachers({teachers, handleAdd}) {
    return (
        <div>
            <h1>Teachers</h1>
            <ul>
                {teachers.map((name) => <Teacher name = {name}/>)}  
            </ul>
            <AddPerson role='teachers' handleAdd={handleAdd}/>
        </div>
    )
}

export default Teachers;