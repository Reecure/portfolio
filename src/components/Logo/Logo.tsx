import {FC} from "react";

interface Props {
}

const Logo: FC<Props> = () => {
    return (
        <a href={"/"} className={"text-3xl text-green-default"}>
            My CV
        </a>
    );
};

export default Logo;