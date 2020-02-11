import React from 'react';
import Teacher from './Teacher';
import Student from './Student';
import "./Styles.css";

//PONER LO DE FILTRAR ANTES DE VIEW
const subject = (props) => {
    const { subject, course, teacher, students, view,notas } = props.subject;
    const { subjectOnClick, studentOnClick,courseFilter,studentFilter,showMarks,changeMarks } = props;
        
    return (
        <div className="Subject">
            {view ?
                (
                <div>
                    <h1 onClick={() => subjectOnClick(subject)}>{subject}</h1>
                    <h2>Course: {course}</h2>
                    <Teacher name={teacher} />
                    <Student
                        students={students}
                        subject={subject}
                        studentOnClick={studentOnClick}
                        studentFilter={studentFilter}
                        notas={notas}
                        changeMarks={changeMarks}
                    ></Student>
                    <button onClick={() => showMarks(subject)}>Show</button>
                </div>
                )
                :
                <div>
                    <h1 onClick={() => subjectOnClick(subject)}>{subject}</h1>
                </div>
            }
        </div>
    )

}
export default subject;
