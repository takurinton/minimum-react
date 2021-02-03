import * as React from 'react';
import { useForm } from '../../hooks/useForm';

export const Form: React.FC = () => {
    const {
        handleChange, 
        handleSubmit, 
        state
    } = useForm();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(state);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} name="name" value={state.name} required={true} placeholder="お名前" />
            <input type="number" onChange={onChange} name="age" value={state.age} required={true} placeholder="年齢" />
            <button type="submit">送信</button>
        </form>
    );
};