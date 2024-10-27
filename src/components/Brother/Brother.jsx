
import { useContext } from 'react';
import Son from '../Son/Son';
import { Context } from '../GrandFather/GrandFather';

const Brother = ({gift}) => {

    const {have} = useContext(Context)
    return (
        <div className='border border-orange-600 rounded-lg w-full'>
        <h1 className='text-2xl font-bold p-6'>Brother</h1>
        <p>{have}</p>
        <div className='flex gap-6 m-6'>
            <Son number={"1"}></Son>
            <Son number={"2"}></Son>
        </div>
    </div>
    );
};

export default Brother;