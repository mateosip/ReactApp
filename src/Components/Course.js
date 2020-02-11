import React from 'react';
import "./Styles.css";

const course = (props) => {
    console.log(props);
    const { courseOnclick } = props;
    return (
        <div className="Course">
            <div className="child" onClick={() => courseOnclick(1)}>
                1
            </div>
            <div className="child" onClick={() => courseOnclick(2)}>
                2
            </div>
            <div className="child" onClick={() => courseOnclick(3)}>
                3
            </div>
            <div className="child" onClick={() => courseOnclick(0)}>
                All
            </div>
        </div>
    )
}
export default course;
// const subjects = cloneDeep(this.state.subjects);
//     const find = cloneDeep(this.state.subjects.filter(el => {
//       el.course === course
//     }))