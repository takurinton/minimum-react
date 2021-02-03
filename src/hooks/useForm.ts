import { useState } from 'react';

interface ContactProps {
    name: string, 
    age: number, 
};
const initialContactState: ContactProps =  {
    name: '', 
    age: 0, 
};

export const useForm = () => {
    const [state, setState] = useState(initialContactState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = (body:object) => {
        console.log(JSON.stringify(body))
        setState(initialContactState)
    };

    return {
        handleChange, 
        handleSubmit, 
        state, 
    };
};