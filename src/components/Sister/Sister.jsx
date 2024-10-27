import React from 'react';
import Son from '../Son/Son';

const Sister = () => {
    return (
        <div className='border border-orange-600 rounded-lg w-full'>
        <h1 className='text-2xl font-bold p-6'>Sister</h1>
        <div className='flex gap-6 m-6'>
            <Son number={"3"}></Son>
            <Son number={"4"}></Son>
        </div>
    </div>
    );
};

export default Sister;