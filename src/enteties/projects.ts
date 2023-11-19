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
        description: "Project with articles where users can add his own articles and and read other. test-email: admin , test-password: 123",
        hrefLink: "https://github.com/harukiOy/pet-project",
        title: "Pet Project",
        vercelLink: "https://zingy-cassata-356a57.netlify.app/"
    },
    {
        img: "https://i.imgur.com/qsAZfuQ.png",
        badges: ["Nextjs", "Redux Toolkit", "tRPC"],
        description: "Here you can create your own course.You can check your statistic on every course. I write this project for diploma ",
        hrefLink: "https://github.com/harukiOy/e-learning",
        title: "E-learning",
        vercelLink: "https://e-learning2-fuqjxwxkz-reecure.vercel.app/"
    },
    {
        img: "https://i.imgur.com/wOYuxRq.png",
        badges: ["Nextjs", "Redux Toolkit", "SCSS", "React Router"],
        description: "React pizza project where you can add pizza to cart and order it.",
        hrefLink: "https://github.com/harukiOy/pizza-shop",
        title: "React Pizza",
        vercelLink: "https://pizza-shop-neon-nu.vercel.app/"
    },
    {
        img: "https://i.imgur.com/MlRQkpR.png",
        badges: ["React", "Redux Toolkit", "Tailwind"],
        description: "Project for sale and buy estate. Auth with local storage",
        hrefLink: "https://github.com/harukiOy/real-estate",
        title: "Real Estate",
        vercelLink: "https://vercel.com/reecure/real-estate"
    }
];