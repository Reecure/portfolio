import {FC} from "react";
import avatar from "../../assets/ava.png";

interface Props {
}

const Avatar: FC<Props> = () => {

    return (
        <img src={avatar} className={"object-cover w-40 h-40 rounded-full"}>
        </img>
    );
};

export default Avatar;