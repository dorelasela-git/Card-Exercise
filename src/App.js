import CardParent from "./Card/CardParent";
import photo3 from './Card/photo3.png'
import photo1 from './Card/photo1.png'
import photo2 from './Card/photo2.png'

function App() {
  const data = [
    {picture: photo3,
      name: 'Dorela',
      age: 21,
      city: 'Tirane',
      skills: ['Mendix','React','Javascript']
    },
    {picture: photo2,
      name: 'Arild',
      age: 30,
      city: 'Vienna',
      skills: ['ReactNative','React','Css']
    },
    {picture: photo1,
      name: 'Amar',
      age: 15,
      city: 'Berlin',
      skills: ['HTML','.Net','C#']
    }
  ]
  return (
      <div className="App">
        <CardParent data={data}/>
      </div>
  );
}
export default App;