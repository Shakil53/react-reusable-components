import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = () => {
    const { register, watch } = useFormContext();

    console.log(watch('something'));

    return (
        <div>
            <input type='text' {...register('something')}></input>
        </div>
    );
};

export default InputField;