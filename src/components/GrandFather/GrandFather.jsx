import React, { createContext } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';


export const Context = createContext()

const GrandFather = () => {

    const have = "Dimond Nekles"
    const have2 = "diamond"
    const have3 = "Golden"
    return (
        <Context.Provider value={{ have2, have3, have }}>
            <div className='border border-blue-600 rounded-lg'>
                <h1 className='text-2xl font-bold p-6'>Grand Father</h1>
                <div className='flex gap-6 m-6'>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </div>
            </div>
        </Context.Provider>
    );
};

export default GrandFather;
