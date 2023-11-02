import {FC} from "react";

interface Props {
    text: string
}

const Badge: FC<Props> = ({text}) => {

    return (
        <p className={"border-2 border-green-default px-[6px] py-[1px] max-w-min rounded-md whitespace-nowrap"}>
            {text}
        </p>
    );
};

export default Badge;