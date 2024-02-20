import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import cn from '../../utils/cn';

// `bg-red-500 ${className} ${variant == 'outline' ? "border border-purple-500 bg-opacity-10 ": ''}`

const Button = ({className, outline}) => {
    return (
        <div>
            <button
                className={cn('bg-purple-500 px-3 py-3 mt-2 rounded-md',
                {
                    'border border-purple-500 bg-opacity-10': outline,
                    
                },
                    className)
                }
            
            >
            Click</button>
        </div>
    );
};

export default Button;