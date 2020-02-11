import React from 'react';
import Subject from './Subject';
const content = (props) => {
    const { subjects, subjectOnClick, studentOnClick,courseFilter,studentFilter,showMarks,changeMarks } = props;
    const subjectsFiltered = courseFilter === 0 ?
        subjects:
        subjects.filter(sub => courseFilter === sub.course)
    return (
        <div className="Content">
            {
                subjectsFiltered.map(sub => (
                    <Subject
                        key={sub.id}
                        subject={sub}
                        subjectOnClick={subjectOnClick}
                        studentOnClick={studentOnClick}
                        courseFilter={courseFilter}
                        studentFilter={studentFilter}
                        showMarks={showMarks}
                        changeMarks={changeMarks}
                    />
                ))
            }
        </div>

    )
}
export default content;
