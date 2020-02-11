import React from 'react'; //we dont need the component
import "./Styles.css";

const Student = (props) => {

    const studentFilter = props.studentFilter;
    const students = props.students;
    const subject = props.subject;
    const studentOnClick = props.studentOnClick;
    const notas = props.notas;
    const changeMarks = props.changeMarks;

    const studentsFiltered =
        students.filter(stu => {
            if (studentFilter === 1) return stu.mark < 5;
            else if (studentFilter === 2) return stu.mark >= 5;
            else return true;
        });
    let arrayMarks = [];
    studentsFiltered.forEach(stu => (
        arrayMarks.push(stu.mark)
    ))
    const media = marks => marks.reduce((a, b) => a + b, 0) / marks.length;

    const higuerGrade = Math.max.apply(Math, arrayMarks);
    const lowerGrade = Math.min.apply(Math, arrayMarks);
    const mediaGrade = Math.round(media(arrayMarks) * 100) / 100;

    return (
        <div className="Student">
            <div className="Student">

                {studentsFiltered.map(stud => (
                    <p
                        key={stud.name}
                        onClick={() => studentOnClick(stud.name, subject)}
                    >
                        {stud.name} - {notas ? stud.mark : null}
                        <input id = {stud.id} style={
                            { visibility: notas ? "visible" : "hidden" }}
                            type="number"
                            min="0"
                            max="10"
                            onChange = {() => changeMarks(subject,stud.name)} />
                    </p>
                ))}
            </div>
            <div className="Student">
                <p>HigherGrade: {higuerGrade}</p>
                <p>LowerGrade: {lowerGrade}</p>
                <p>MediaGrade: {mediaGrade}</p>
            </div>
        </div>
    )
}
export default Student;
