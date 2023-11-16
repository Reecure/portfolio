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
        img: "https://i.imgur.com/imWZuay.png",
        badges: ["React", "i18next", "Redux Toolkit", "React Router"],
        description: "Project with articles where users can add his own articles and and read other.",
        hrefLink: "https://github.com/Reecure/pet-project",
        title: "Pet Project",
        vercelLink: "https://zingy-cassata-356a57.netlify.app/"
    },
    {
        img: "https://i.imgur.com/qsAZfuQ.png",
        badges: ["Nextjs", "Redux Toolkit", "tRPC"],
        description: "Here you can create your own course.You can check your statistic on every course. I write this project for diploma ",
        hrefLink: "https://github.com/Reecure/e-learning",
        title: "E-learning",
        vercelLink: "https://e-learning2-jj543y4xw-reecure.vercel.app/"
    },
    {
        img: "https://i.imgur.com/wOYuxRq.png",
        badges: ["React", "Redux Toolkit", "SCSS", "React Router"],
        description: "React pizza project where you can add pizza to cart and order it.",
        hrefLink: "https://github.com/Reecure/pizza-shop",
        title: "React Pizza",
        vercelLink: "https://pizza-shop-neon-nu.vercel.app/"
    },
    {
        img: "https://i.imgur.com/w0WnCGr.png",
        badges: ["React", "Redux Toolkit", "CSS",],
        description: "Simple game rock-paper-scissors vs computer",
        hrefLink: "https://github.com/Reecure/rock-paper-scissors",
        title: "Rock-Paper-Scissors",
        vercelLink: "https://rock-paper-scissors-sand-five.vercel.app/"
    }

];