import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode
}

const Container: FC<Props> = ({children}) => {
    return (
        <div className={"max-w-[1440px] mx-auto px-5 sm:px-10 md:px-16 lg:px-20 mb-20"}>
            {children}
        </div>
    );
};

export default Container;