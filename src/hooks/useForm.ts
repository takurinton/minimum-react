import { useState } from 'react';

interface Props {
    name: string, 
    age: number, 
};
const initialState: Props =  {
    name: '', 
    age: 0, 
};

export const useForm = () => {
    const [state, setState] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = (body:Props) => {
        const content = `${body.name}さん，${body.age}才`;
        alert(content);
        setState(initialState)
    };

    return {
        handleChange, 
        handleSubmit, 
        state, 
    };
};