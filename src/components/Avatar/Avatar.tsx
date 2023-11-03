import {FC} from "react";
import avatar from "../../assets/ava.png";

interface Props {
}

const Avatar: FC<Props> = () => {

    return (
        <img src={avatar} className={"object-cover w-32 h-32 md:w-40 md:h-40 rounded-full"}>
        </img>
    );
};

export default Avatar;