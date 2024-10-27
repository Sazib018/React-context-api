import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div className='border border-cyan-400 rounded-lg w-full'>
        <h1 className='text-2xl font-bold p-6'>Aunty</h1>
        <div className='flex gap-6 m-6'>
            <Cousin gender={"Male"} cousin={"3"}></Cousin>
            <Cousin gender={"Female"} cousin={"4"}></Cousin>
        </div>
    </div>
    );
};

export default Aunty;