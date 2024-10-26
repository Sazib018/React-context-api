import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Uncomment to log form data
        // console.log(event.target.name.value);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2 border-red-500 rounded-md text-xl p-2 w-96" type="text" name="name" />
                <br />
                <br />
                <input className="border-2 border-red-500 rounded-md text-xl p-2 w-96" type="email" name="email" />
                <br />
                <br />
                <input className="border-2 border-red-500 rounded-md text-xl p-2 w-96" type="password" name="password" />
                <br />
                <br />
                <input className="border-2 text-xl p-2 w-28 rounded-md bg-green-500" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;
