

export const Input = ({label, register, errors, type}) => {
    return (
        <div className="w-full max-w-md">
            <label className="block" htmlFor="name">{label}</label>
            
                    <input type={type} id="name" {...register}>
                    </input>
                    {errors.name && <span className="text-xs font-semibold text-red-500">{errors.name.message}</span>}
                </div>
    );
};

