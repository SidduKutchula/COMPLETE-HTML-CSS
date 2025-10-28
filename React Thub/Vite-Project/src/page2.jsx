import React from 'react';
import { useContext } from 'react';
import Store from './Store';
import { Link } from 'react-router-dom';
function Page2() {
    var { Count, setCount } = useContext(Store);

    return (
        <div>
            <button
                onClick={() => setCount(Count + 1)}
            >
                Add
            </button>
            <h1>Count : {Count}</h1>
            <h1>Page-2</h1>
            <Link to="/">Move to Page-1</Link>
        </div>
    );
}

export default Page2;