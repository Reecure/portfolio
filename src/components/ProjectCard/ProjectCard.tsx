import {FC} from "react";
import Badge from "../Badge/Badge.tsx";
import {IProject} from "../../entetis/projects.ts";
import Button from "../Button/Button.tsx";


interface Props {
    project: IProject
}

const ProjectCard: FC<Props> = ({project}) => {
    return (
        <div className={"flex justify-around border-2 border-green-default w-full rounded-md px-5 py-3 hover:scale-[1.01] duration-300"}>
            <img src={project.img} className={"w-64 h-full object-cover"} />
            <div className={"flex flex-col justify-center gap-5"}>
                <div className={"flex gap-5 items-center"}>
                    <h5 className={"text-3xl font-bold"}>{project.title}</h5>
                    <div className={"flex gap-2"}>
                        {
                            project.badges.map((badge, i) => {
                                return <Badge key={i} text={badge} />;
                            })
                        }
                    </div>
                </div>
                <p className={"max-w-[500px]"}>{project.description}</p>
                <div className={"flex items-center gap-5"}>
                    <a href={project.hrefLink} className={"text-green-default underline text-lg hover:text-green-default/60 duration-500"}>Learn more...</a>
                    <a href={project.vercelLink}>
                        <Button className={""} >Preview</Button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;