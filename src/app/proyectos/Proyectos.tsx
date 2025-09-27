import "./Proyectos.css";
import Image from "next/image";

export default function Proyectos() {
    return (
        <main className="proyectos-page">
            <h1>Proyectos</h1>
            <p>Aquí puedes encontrar una colección de mis proyectos más recientes.</p>

            <div className="proyectos-list">
                <div className="proyecto-item">
                    <div className="proyecto-info">
                        <h2>GIA PUCP</h2>

                        <div className="proyecto-meta">
                            <h3>sep, 2025</h3>
                            <a href="http://giaperu.space/">giaperu.space</a> 
                        </div>
                        
                        <p>Landing page de organización estudiantil sobre ingeniería aeroespacial. Enfocado en difusión de noticias y eventos relacionados.</p>
                        <ul className="tecnologias-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <Image 
                        src="/proyectos/gia.png" 
                        alt="Imagen del proyecto GIA" 
                        width={400} height={300} 
                        className="proyecto-imagen" />
                </div>
                <div className="proyecto-item">
                    <div className="proyecto-info">
                        <h2>Portal de Desafiliación</h2>

                        <div className="proyecto-meta">
                            <h3>jul, 2025</h3>
                            <a href="https://github.com/UlisesYlave/PortalDesafiliacion">Github</a> 
                        </div>

                        <p>Portal de Desafiliacion Web que busca la retención de los usuarios mediante ofertas personalizadas. Considerando residencia, número y tipo de afiliaciones.</p>
                        <ul className="tecnologias-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java</li>
                            <li>.NET</li>
                        </ul>
                    </div>
                    <Image 
                        src="/proyectos/portal.png" 
                        alt="Imagen del proyecto Portal de Desafiliación" 
                        width={400} height={300} 
                        className="proyecto-imagen" />
                </div>
                <div className="proyecto-item">
                    <div className="proyecto-info">
                        <h2>Senergycom</h2>

                        <div className="proyecto-meta">
                            <h3>mar, 2025</h3>
                            <a href="https://senergycom.netlify.app/">senergycom.netlify.app</a> 
                        </div>
    
                        <p>Landing Page para empresa familiar J&R Senergycom SAC enfocada en cableado estructurado, energía y seguridad electrónica.</p>
                    
                        <ul className="tecnologias-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <Image 
                        src="/proyectos/senergycom.jpg" 
                        alt="Imagen del proyecto Senergycom" 
                        width={400} height={300} 
                        className="proyecto-imagen" />
                </div>
            </div>
        </main>
    );
}
