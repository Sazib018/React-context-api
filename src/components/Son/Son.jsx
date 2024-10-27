import React, { useContext } from 'react';
import { Context } from '../GrandFather/GrandFather';

const Son = ({ number, give }) => {
    const gift = useContext(Context)
    console.log(gift.have3);

    return (
        <div className='border border-orange-600 rounded-lg w-full'>
            <h1 className='text-2xl font-bold p-6'>Son {number}</h1>
            {number === "4" &&
                <>{gift.have2}</>
            }
            {number === "12" &&
                <>{gift.have3}</>
            }
            <h2>{give}</h2>
        </div>
    );
};

export default Son;