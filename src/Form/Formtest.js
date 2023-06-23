import React, { useState } from 'react';
import './Form.css'
const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [peopleList, setPeopleList] = useState([]);

    const handleAddPerson = () => {
        const newPerson = {
            id: Date.now(),
            name: name,
            lastName: lastName,
            email: email,
            password: password
        };
        setPeopleList([...peopleList, newPerson]);
        // Reset input fields
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    const handleDeletePerson = (id) => {
        const updatedList = peopleList.filter(person => person.id !== id);
        setPeopleList(updatedList);
    };

    return (
        <div className="form-container">
            <h1>People List</h1>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <button className="add-button" type="button" onClick={handleAddPerson}>Add</button>
            </form>

            <h2>People:</h2>
            {peopleList.map(person => (
                <div key={person.id}>
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
    );
};

export default Form;