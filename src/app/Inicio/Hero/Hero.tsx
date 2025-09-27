import "./Hero.css";
import Image from "next/image";

export default function Hero(){

    const contactLinks = [
        {
        icon: "/Icons/github_blanco.png",
        text: "UlisesYlave",
        href: "https://github.com/UlisesYlave",
        },
        {
        icon: "/Icons/linkedin.png",
        text: "Braulio Antayhua",
        href: "https://www.linkedin.com/in/braulioantayhua",
        }
    ];

    return(
        <div className="hero-section">
            
            <div className="hero-content">
                <div className="hero-info">
                    <h1>Braulio Ulises</h1>
                    <h1>Antayhua Ylave</h1>
                    <p>Estudiante de Ingeniería Informática PUCP</p>
                    <p>Desarrollador Web | Aspirante a DevOps Junior</p>
                    <div className="wave"></div>
                    <div className="contact-links-list-hero">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link-item"
                            >
                                <Image
                                    src={link.icon}
                                    alt={link.text}
                                    width={50}
                                    height={50}
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <Image
                    src="/perfil.jpg"
                    alt="Imagen de perfil"
                    width={400}
                    height={300}
                    className="perfil-imagen"
                />
            </div>
        </div>
    )
}