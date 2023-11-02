export interface IProject {
    img: string;
    title: string;
    badges: string[];
    description: string
    hrefLink: string
    vercelLink: string
}

export const projects:IProject[] = [
    {
        img: "0",
        badges: ["React", "i18next", "Redux Toolkit", "React Router"],
        description: "Project with articles where users can add his own articles and and read other.",
        hrefLink: "https://github.com/Reecure/pet-project",
        title: "Pet Project",
        vercelLink: ""
    },
    {
        img: "0",
        badges: ["Nextjs", "Redux Toolkit", "tRPC"],
        description: "Here you can create your own course.You can check your statistic on every course. I write this project for diploma ",
        hrefLink: "https://github.com/Reecure/e-learning",
        title: "E-learning",
        vercelLink: "https://vercel.com/reecure/e-learning2"
    },
    {
        img: "0",
        badges: ["React", "Redux Toolkit", "SCSS", "React Router"],
        description: "React pizza project where you can add pizza to cart and order it.",
        hrefLink: "https://github.com/Reecure/pizza-shop",
        title: "React Pizza",
        vercelLink: "https://pizza-shop-neon-nu.vercel.app"
    }

];