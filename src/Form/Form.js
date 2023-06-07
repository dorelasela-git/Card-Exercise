import React, {useState} from "react"
import './Form.css'
const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [people, setPeople] = useState([]);
    const handleAdd = () => {
        const newPerson = {
            id:Date.now(),
            name: name,
            lastName: lastName,
            email: email,
            password: password
        };
        setPeople([...people, newPerson]);
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };
    const handleDeletePerson = (id) => {
        const updatedList = people.filter(person => person.id !== id);
        setPeople(updatedList);
    };
    return (
        <div className="form-wrapper">
            <h1>People List</h1>
            <form>
                <label>Name:
                    <input className="input" placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)} />
                </label><br />
                <label>Last Name:
                    <input className="input" placeholder="Last Name" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                </label><br />
                <label>Email:
                    <input className="input" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label><br />
                <label>Password:
                    <input className="input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label><br />
                <button className="button-add" type="button" onClick={handleAdd}>Add</button>
            </form>
            {people.map(person => (
                <div key={person.id} className="card">
                    <div>
                        <p>Name:</p> {person.name}
                    </div>
                    <div>
                        <p>Last Name:</p> {person.lastName}
                    </div>
                    <div>
                        <p>Email:</p> {person.email}
                    </div>
                    <div>
                        <p>Password:</p> {person.password}
                    </div>
                    <button className="delete-button" type="button" onClick={() => handleDeletePerson(person.id)}>Delete</button>
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default Form;