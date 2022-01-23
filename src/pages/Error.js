import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return <>

        <div className="div bg-info text-light">
            <div className="centered-element text-center">
                <h2 className='py-2 display-1'> 404 </h2>
                <h3 className='py-2'>No Found!</h3><br />
                <Link to='/' className="button mt-5">Back Home</Link>
            </div>
        </div>
    </>
};

export default Error;
