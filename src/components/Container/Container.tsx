import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode
}

const Container: FC<Props> = ({children}) => {
    return (
        <div className={"max-w-[1440px] mx-auto px-20"}>
            {children}
        </div>
    );
};

export default Container;