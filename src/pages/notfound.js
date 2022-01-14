import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../components/Error';

const Notfound = () => {
    return (
        <div>
            <Error>
             <Link to="/" >Back home</Link>
            </Error>
        </div>
    )
}

export default Notfound
