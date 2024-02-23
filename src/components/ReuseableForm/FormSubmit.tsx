import { useContext } from "react";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { FormElementContext } from ".";

export const FormSubmit = () => {
    const {double} = useContext(FormElementContext)
    return (
        <div className={cn("grid grid-cols-1 justify-items-center gap-5 my-5", {
            "md:grid-cols-2": double,
                 })}>
                <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
                <Button className="w-full md:w-fit">submit</Button>
                </div>
            </div>
    );
};

