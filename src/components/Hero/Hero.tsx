import {FC} from "react";
import Button from "../Button/Button.tsx";
import Avatar from "../Avatar/Avatar.tsx";

interface Props {
}

const Hero: FC<Props> = () => {
    return (
        <article className={"flex justify-between items-center gap-3 h-[400px]"}>
            <div className={"flex flex-col gap-3"}>
                <h3 className={"text-6xl text-green-default font-bold"}>Pirian Yurii.</h3>
                <p className={"text-lg font-bold"}>Web developer. Frontend enjoyer...</p>
                <Button className={""}>View CV</Button>
            </div>
            <div>
                <Avatar />
            </div>
        </article>
    );
};

export default Hero;