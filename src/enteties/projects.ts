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
        img: "https://i.imgur.com/qsAZfuQ.png",
        badges: ["Nextjs", "Redux Toolkit", "tRPC", "MongoDB", "Prisma"],
        description: "Project about courses, where user can create courses or study. I write this project for diploma. test-email: example@gmail.com , test-password: 12345678",
        hrefLink: "https://github.com/harukiOy/e-learning",
        title: "E-learning",
        vercelLink: "https://e-learning2-fuqjxwxkz-reecure.vercel.app/"
    },
    {
        img: "https://i.imgur.com/q8nxCiE.png",
        badges: ["React", "Redux Toolkit", "Tailwind", "React Router"],
        description: "For this project i use hacker news api https://github.com/HackerNews/API. Create my own pagination and comments tree render.",
        hrefLink: "https://github.com/Reecure/hacker-news",
        title: "Hacker News",
        vercelLink: "https://hacker-news-pj5yhs2la-reecure.vercel.app"
    },
    {
        img: "https://i.imgur.com/imWZuay.png",
        badges: ["React", "i18next", "Redux Toolkit", "React Router"],
        description: "Project with articles where users can add his own articles and and read other. test-email: admin , test-password: 123",
        hrefLink: "https://github.com/harukiOy/pet-project",
        title: "Pet Project",
        vercelLink: "https://zingy-cassata-356a57.netlify.app/"
    },
    {
        img: "https://i.imgur.com/wOYuxRq.png",
        badges: ["React", "Redux Toolkit", "SCSS", "React Router"],
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
        vercelLink: "https://real-estate-green.vercel.app/"
    }
];