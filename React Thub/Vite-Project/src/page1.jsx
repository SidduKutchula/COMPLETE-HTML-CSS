import React, { useContext } from 'react';
import Store from './Store';
import { Link } from 'react-router-dom';
function Page1() {
    const { Count, setCount } = useContext(Store);
    return (
        <div>
            <button
                onClick={() => setCount(Count + 1)}
            >
                Add
            </button>
            <h1>Count : {Count}</h1>
            <Link to="/page2" >Move to Page-2</Link>
            <h1>Page-1</h1>
        </div> 
    );
}

export default Page1;