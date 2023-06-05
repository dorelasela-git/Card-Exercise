import Table from "./Table/Table";
const App = () => {
  const studentDataList =
      [
        {student_id: 1, student_name: 'Matias', student_lastName: 'Leka', student_class: 12, grades:{math: 8, literature: 6, physics: 8, chemistry: 9, geography: 7, history: 9}},
        {student_id: 2, student_name: 'Irena', student_lastName: 'Duka', student_class: 10, grades:{math: 5, literature: 9, physics: 6, chemistry: 5, geography: 5, history: 10}},
        {student_id: 3, student_name: 'Maria', student_lastName: 'Agolli', student_class: 11, grades:{math: 9, literature: 6, physics: 7, chemistry: 8, geography: 10, history: 8}}
      ];
  const displayAverageGrade = (averageGrade) => {
    alert(`Average Grade: ${averageGrade.toFixed(2)}`);
  };
  return (
      <div>
        <h1>Student Average & Grades</h1>
        <Table studentDataList={studentDataList} displayAverageGrade={displayAverageGrade} />
      </div>
  );
};
export default App;
// import CardParent from "./Card/CardParent";
// import photo3 from './Card/photo3.png'
// import photo1 from './Card/photo1.png'
// import photo2 from './Card/photo2.png'
//
// function App() {
//   const data = [
//     {picture: photo3,
//       name: 'Dorela',
//       age: 21,
//       isGraduated: false,
//       city: 'Tirane',
//       skills: ['Mendix','React','Javascript']
//     },
//     {picture: photo2,
//       name: 'Arild',
//       isGraduated: false,
//       age: 30,
//       city: 'Vienna',
//       skills: ['ReactNative','React','Css']
//     },
//     {picture: photo1,
//       name: 'Amar',
//       age: 15,
//       city: 'Berlin',
//       isGraduated: false,
//       skills: ['HTML','.Net','C#']
//     }
//   ]
//   return (
//       <div className="App">
//         <CardParent data={data}/>
//       </div>
//   );
// }
// export default App;