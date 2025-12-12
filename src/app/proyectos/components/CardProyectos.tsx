import Image from "next/image"
import { ExternalLink } from "lucide-react"
import "./CardProyectos.css"

interface CardProyectosProps {
  titulo: string
  fecha: string
  enlace: string
  descripcion: string
  tecnologias: string[]
  imagen: string
  alt: string
}

export default function CardProyectos({
  titulo,
  fecha,
  enlace,
  descripcion,
  tecnologias,
  imagen,
  alt,
}: CardProyectosProps) {
  return (
    <div className="card-proyecto">
      <div className="card-proyecto-contenido">
        {/* Imagen del proyecto */}
        <div className="proyecto-imagen-container">
          <Image src={imagen || "/placeholder.svg"} alt={alt} width={400} height={250} className="proyecto-imagen" />
          <div className="imagen-overlay" />
        </div>

        {/* Información del proyecto */}
        <div className="proyecto-info">
          <h2 className="proyecto-titulo">{titulo}</h2>

          <div className="proyecto-meta">
            <span className="proyecto-fecha">{fecha}</span>
            <a href={enlace} target="_blank" rel="noopener noreferrer" className="proyecto-enlace">
              <span>Ver proyecto</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <p className="proyecto-descripcion">{descripcion}</p>

          {/* Tecnologías */}
          <div className="tecnologias-container">
            <ul className="tecnologias-list">
              {tecnologias.map((tech, index) => (
                <li key={index} className="tecnologia-tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
