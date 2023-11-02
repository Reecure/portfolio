import {ButtonHTMLAttributes, FC, ReactNode} from "react";

type Props =  {
    children: ReactNode
    className: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({className, children ,...otherProps}) => {

    return (
        <button
            className={`${className} px-3 py-2 bg-green-default text-background-default font-medium max-w-min whitespace-nowrap hover:bg-green-default/60 duration-500`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;