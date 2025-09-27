import "./Experiencia.css";
import Image from "next/image";

export default function Experiencia() {
    return (
        <section className="experiencia-section">
            <h1>Experiencia</h1>
            <p className="mb-4">Aquí puedes encontrar una descripción de mi experiencia laboral más relevante.</p>
            <div className="experiencia-item">
                <div className="experiencia-card">
                    <h2>Jefe de Operaciones Informáticas</h2>
                    <p>Fecha: mar 2025 - Presente</p>
                    <ul>
                        <li>✅ Desarrollo de aplicación web utilizando NextJS, TypeScript y Strapi.</li>
                        <li>✅ Implementación de API RESTful.</li>
                        <li>✅ Lideré un equipo ágil.</li>
                        <li>✅ Organización y realización de documentación técnica de GIA.</li>
                        <li>✅ Gestión de servidores y dominios.</li>
                        <li>✅ Coordinación de eventos y talleres tecnológicos.</li>
                    </ul>
                </div>
                <Image
                    src="/logo-gia-inversion.png"
                    alt="logo GIA"
                    width={800}
                    height={600}
                    className="experiencia-logo"
                />  
            </div>
            
        </section>
    );
}
