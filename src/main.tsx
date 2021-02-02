import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Main: React.FC = () => { 
    return (
        <h1>hello world</h1>
    );
}

ReactDOM.render(<Main />, document.getElementById('main'));