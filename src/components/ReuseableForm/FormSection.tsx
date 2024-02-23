import { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from ".";

export const FormSection = ({children}) => {
    const {double} = useContext(FormElementContext)
    return (
        <form
        className={cn("grid grid-cols-1 justify-items-center", {
            "md:grid-cols-2": double,
        })}
        >
           {children}
        </form>
    );
};

