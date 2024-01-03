import {FC} from "react";
import Logo from "../Logo/Logo.tsx";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";

interface Props {
}

const Navbar: FC<Props> = () => {

    return (
        <nav className={"flex justify-between h-10 w-full py-2"}>
            <Logo />
            <div className={"flex gap-2"}>
                <a className={"text-4xl text-white"} href={"https://www.linkedin.com/in/yurii-piryan-37a8a929b/"}><FaLinkedin /></a>
                <a className={"text-4xl text-white"} href={"https://github.com/Reecure"}><AiFillGithub /></a>
            </div>

        </nav>
    );
};

export default Navbar;