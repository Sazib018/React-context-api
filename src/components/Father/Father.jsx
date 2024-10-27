import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='border border-cyan-400 rounded-lg w-full'>
            <h1 className='text-2xl font-bold p-6'>Father</h1>
            <div className='flex gap-6 m-6'>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;
