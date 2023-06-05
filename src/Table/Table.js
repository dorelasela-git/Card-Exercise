import PropTypes from 'prop-types';
import StudentRow from "./StudentRow";
import './Table.css'
const StudentTable = ({studentDataList,displayAverageGrade}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Math</th>
                <th>Literature</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Geography</th>
                <th>History</th>
                <th>Class</th>
                <th>Average</th>
            </tr>
            </thead>
            <tbody>
            {studentDataList.map((student) => (
                <StudentRow key={student.student_id} student={student} displayAverageGrade={displayAverageGrade}
                />
            ))}
            </tbody>
        </table>
    );
}
PropTypes.propTypes = {
    student : PropTypes.shape({
        student_id : PropTypes.number.isRequired,
        student_name: PropTypes.string.isRequired,
        student_lastname: PropTypes.string.isRequired,
        class:PropTypes.number.isRequired,
        grades : PropTypes.shape({
            math: PropTypes.number.isRequired,
            literature: PropTypes.number.isRequired,
            physics: PropTypes.number.isRequired,
            chemistry: PropTypes.number.isRequired,
            geography: PropTypes.number.isRequired
        }),
    }),
    DisplayAverageGrade: PropTypes.func.isRequired,
}
export default StudentTable;