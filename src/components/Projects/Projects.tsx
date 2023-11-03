import {FC} from "react";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import {projects} from "../../enteties/projects.ts";

interface Props {
}

const Projects: FC<Props> = () => {

    return (
        <article className={"flex flex-col"}>
            <h4 className={"text-2xl text-green-default font-bold mb-5"}>My Projects</h4>
            <div className={"flex flex-col gap-3"}>
                {
                    projects.map((project, i) => {
                        return <ProjectCard key={i} project={project} />;
                    })
                }
            </div>
        </article>
    );
};

export default Projects;