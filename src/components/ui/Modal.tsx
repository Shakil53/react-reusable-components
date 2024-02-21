import { ReactNode, createContext, useContext, useRef } from "react";
import cn from "../../utils/cn";
import {createPortal} from 'react-dom';


const ModalContext = createContext<TModalContext | null>(null)
type TModalContext = {
    onClose: ()=> void
}

type TModal = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
type TClose = {
    children?: ReactNode;
}
type THeader = TClose;
const Modal = ({ isOpen, onClose, children }: TModal) => {
    
    const containerRef = useRef<HTMLDivElement>(null)
    
    const handleOutSideClose = (e: MouseEvent) => {
        console.log(e.target);
        console.log(containerRef.current);
        if (!containerRef.current?.contains(e.target as Node)) {
            onClose();
        }
    }

    return createPortal(
            <ModalContext.Provider value={{onClose}}>
            <div className={cn("fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
                {
                    visible: isOpen
                }
        )}
            
        >
                <div ref={containerRef} className="bg-white p-4 w-full max-w-sm rounded-md">
                    {children}
                </div>
            </div>
            </ModalContext.Provider>,
            document.getElementById('portal') as Element
    )
};

const CloseButton = ({children}: TClose) => {

    const {onClose} = useContext(ModalContext) as TModalContext

    return (
       <button onClick={onClose}>
            {children ? children : (
                <svg
                    className="size-6 bg-red-500 rounded-sm text-white p-0.5"
                    fill="none"
                    stroke-width="4"
                    stroke="currentColor"
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        )}
     </button>
    )
}

const header = ({children}: THeader) => {
    return <div className="flex justify-between  items-center w-full mb-3">{children}</div>
}

Modal.Header = header;

Modal.CloseButton = CloseButton;

export default Modal;