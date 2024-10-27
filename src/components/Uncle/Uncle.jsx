import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({give}) => {
    return (
        <div className='border border-cyan-400 rounded-lg w-full'>
        <h1 className='text-2xl font-bold p-6'>Uncle</h1>
        <div className='flex gap-6 m-6'>
            <Cousin gender={"Male"} cousin={"1"}></Cousin>
            <Cousin gender={"Female"} cousin={"2"} give={give}></Cousin>
        </div>
    </div>
    );
};

export default Uncle;