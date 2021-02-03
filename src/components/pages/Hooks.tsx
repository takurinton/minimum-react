import * as React from 'react';
import { useState } from 'react';

export const Hooks: React.FC = () => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(count+1);
    };

    return (
        <div>
            <h1>{ count }</h1>
            {/* どっちでもいける */}
            <button onClick={countUp}>count up</button>
            <button onClick={() => setCount(count+1)}>count up</button>
        </div>
    );
};