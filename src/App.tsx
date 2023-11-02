import Navbar from "./components/Navbar/Navbar.tsx";
import Container from "./components/Container/Container.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Projects from "./components/Projects/Projects.tsx";

function App() {
    return (
        <Container>
            <Navbar />
            <Hero />
            <Projects />
        </Container>
    );
}

export default App;
