import {FC} from "react";
import Button from "../Button/Button.tsx";
import Avatar from "../Avatar/Avatar.tsx";
import file from "../../../public/CV_Piryan_Yurii.pdf";

interface Props {
}

const Hero: FC<Props> = () => {
    return (
        <article className={"flex flex-col-reverse md:flex-row  md:justify-between items-center gap-3 h-[300px] md:h-[400px] mb-10 md:mb-0"}>
            <div className={"flex flex-col gap-3"}>
                <h3 className={"text-3xl md:text-6xl text-green-default font-bold"}>Pirian Yurii.</h3>
                <p className={"text-md md:text-lg font-bold"}>Web developer. Frontend enjoyer...</p>
                <a href={file} target={"_blank"}>
                    <Button className={""}>View CV</Button>
                </a>
            </div>
            <div>
                <Avatar />
            </div>
        </article>
    );
};

export default Hero;