const StudentRow = ({student, displayAverageGrade }) => {
    const handleClick = () => {
        const {math, literature, physics, chemistry, geography, history} = student.grades;
        const averageGrade =(math + literature + physics + chemistry + geography + history) / 6;

        // const grades = Object.values(student.grades);
        // const sortedGrades = [...grades].sort((a, b) => b - a);
        // const rank = sortedGrades.findIndex((grade) => grade === averageGrade) + 1;
        displayAverageGrade(averageGrade);
    };
    return (
        <tr>
            <td>{student.student_id}</td>
            <td>{student.student_name}</td>
            <td>{student.student_lastName}</td>
            <td>{student.grades.math}</td>
            <td>{student.grades.literature}</td>
            <td>{student.grades.physics}</td>
            <td>{student.grades.chemistry}</td>
            <td>{student.grades.geography}</td>
            <td>{student.grades.history}</td>
            <td>{student.student_class}</td>
            <td><button onClick={handleClick}>Display Average Grade</button></td>
        </tr>
    );
};
export default StudentRow;