import Proyectos from "../proyectos/Proyectos";
import Experiencia from "./Experiencia/Experiencia";
import Hero from "./Hero/Hero";
import "./Inicio.css";

export default function Inicio() {

    const contactLinks = [
        {
        icon: "/Icons/github.png",
        text: "UlisesYlave",
        href: "https://github.com/UlisesYlave",
        },
        {
        icon: "/Icons/linkedin.png",
        text: "Braulio Antayhua",
        href: "https://www.linkedin.com/braulioantayhua",
        },
        {
        icon: "/Icons/gmail.png",
        text: "braulises1606@gmail.com",
        href: "mailto:braulises1606@gmail.com",
        }
    ];

    return (
        <main>
            <Hero />
            <Experiencia />
            <Proyectos />
        </main>
    );
}
