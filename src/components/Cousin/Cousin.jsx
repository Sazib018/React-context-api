import React from 'react';
import Son from '../Son/Son';


const Cousin = ({gender, cousin, give}) => {
    
    return (
        <div className='border border-orange-600 rounded-lg w-full py-6'>
        <h1 className='text-2xl font-bold px-6'>Cousin {cousin}</h1>
        <h1 className='text-xl font-bold'>{gender}</h1>
       
            {cousin==="1" &&
             <div className='flex gap-6 m-6'>
                <Son number={"5"}></Son>
                <Son number={"6"}></Son>
            </div>
            }
            {cousin==="2" &&
             <div className='flex gap-6 m-6'>
                <Son number={"7"}></Son>
                <Son number={"8"} give={give}></Son>
            </div>
            }
            {cousin==="3" &&
             <div className='flex gap-6 m-6'>
                <Son number={"9"}></Son>
                <Son number={"10"}></Son>
            </div>
            }
            {cousin==="4" &&
             <div className='flex gap-6 m-6'>
                <Son number={"11"}></Son>
                <Son number={"12"}></Son>
            </div>
            }
       
    </div>
    );
};

export default Cousin;