import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import {zodResolver} from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";



const NormalForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TNormalForm>({
        resolver: zodResolver(SignUpSchema
        ),
    })
    
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }


    const double = true;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn("border border-gray-300 rounded-lg shadow-sm w-full p-5 mx-auto", {
            'max-w-5xl': double,
            'max-w-md': !double,

        })}>
            <div className={cn("grid grid-cols-1 justify-items-center", {
                "md:grid-cols-2": double,
            })}>

                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Name</label>
                    <input type="text" id="name" {...register('name')}>
                    </input>
                    {errors.name && <span className="text-xs font-semibold text-red-500">{errors.name.message}</span>}
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="email">Email</label>
                    <input className="w-full" type="email" id="email" {...register('email')}></input>
                    {errors.email && <span className="text-xs font-semibold text-red-500">{errors.email.message}</span>}
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="password">Password</label>
                    <input className="w-full" type="password" id="password" {...register('password',{ minLength: 8 })}></input>
                    {errors.password && <span className="text-xs font-semibold text-red-500">{errors.password.message}</span>}
                </div>
                <div className="w-full max-w-md">
                <label className="block" htmlFor="select">Select any</label>
                <select>
                        <option>one</option>
                        <option>two</option>
                        <option>three</option>
                    </select>
                </div>
                <div className="w-full max-w-md">
                <label className="block" htmlFor="testarea">Say Something</label>
               <textarea></textarea>
                </div>
                <div className="w-full max-w-md">
                <label className="block" htmlFor="testarea">Check box</label>
               <input type="checkbox" className="border border-gray-400 rounded-md bg checked:bg-purple-500 hover:bg-purple-500 text-purple-500 focus:border-purple-500 focus:ring-1 "></input>
                </div>
             </div>
                <div className={cn("grid grid-cols-1 justify-items-center gap-5 my-5", {
                "md:grid-cols-2": double,
                     })}>
                    <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
                    <Button className="w-full md:w-fit">submit</Button>
                    </div>
                </div>
            
          
        </form>
    );
};

export default NormalForm;