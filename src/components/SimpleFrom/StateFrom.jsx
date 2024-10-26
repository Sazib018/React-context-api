import React, { useState } from 'react';

const StateForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (s) => {
        s.preventDefault();
    };

    const handleEmail = (s) => {
        setEmail(s.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(s) => setName(s.target.value)}
                    className="border-2 border-blue-500 rounded-md text-xl p-2 w-96"
                    type="text"
                    name="name"/>
                <br />
                <br />
                <input
                    onChange={handleEmail}
                    className="border-2 border-blue-500 rounded-md text-xl p-2 w-96"
                    type="email"
                    name="email"/>
                <br />
                <br />
                <input
                    onChange={(event) => setPass(event.target.value)}
                    className="border-2 border-blue-500 rounded-md text-xl p-2 w-96"
                    type="password"
                    name="password"/>
                <br />
                <br />
                <input className="border-2 text-xl p-2 w-28 rounded-md bg-green-500" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm;
