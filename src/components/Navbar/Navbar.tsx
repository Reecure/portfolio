import {FC} from "react";
import Logo from "../Logo/Logo.tsx";
import {AiFillGithub} from "react-icons/ai";

interface Props {
}

const Navbar: FC<Props> = () => {

    return (
        <nav className={"flex justify-between h-10 w-full py-2"}>
            <Logo />
            <a className={"text-4xl text-white"} href={"https://github.com/Reecure"}><AiFillGithub /></a>
        </nav>
    );
};

export default Navbar;