import "./Proyectos.css"
import CardProyectos from "./components/CardProyectos"
import proyectosData from "./data/proyectos.json"

export default function Proyectos() {
  return (
    <main className="proyectos-page">
      <div className="proyectos-header">
        <h1>Proyectos</h1>
        <p>Aquí puedes encontrar una colección de mis proyectos más recientes.</p>
      </div>

      <div className="proyectos-list">
        {proyectosData.map((proyecto) => (
          <CardProyectos
            key={proyecto.id}
            titulo={proyecto.titulo}
            fecha={proyecto.fecha}
            enlace={proyecto.enlace}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            imagen={proyecto.imagen}
            alt={proyecto.alt}
          />
        ))}
      </div>
    </main>
  )
}
