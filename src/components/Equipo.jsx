/* eslint-disable no-unused-vars */
import '../css/Equipo.css'
import fotoViki from '../assets/foto-viki.jpeg'
import fotoMajo from '../assets/majo.jpeg'
import fotoJesi from '../assets/jesi.jpeg'

const Equipo = () => {

    const equipo = [
        {
            id: 1,
            nombre: "Jessica Gomez Leccese",
            cargo: 'Presidenta de IGNEAS',
            presentacion: 'Lic. en Artes Plásticas. Especialista en esculturas. Diplomada en liderazgo politico. Miembro fundador de IGNEAS.',
            imagen: fotoJesi
        },
        {
            id: 2,
            nombre: "Maria Victoria Herrero Jaime",
            cargo: 'Vicepresidenta de IGNEAS',
            presentacion: 'Lic. en Artes Plásticas especializada en grabado y posgrado en Arte Digital. Miembro fundador de IGNEAS.',
            imagen: fotoViki
        },
        {
            id: 3,
            nombre: "Maria Jose Mazzocato",
            cargo: 'Secretaria General',
            presentacion: 'Lic. en Relaciones Internacionales. Especialista en terrorismo, defensa y estrategia militar. Docente Academica. Miembro fundador de IGNEAS.',
            imagen: fotoMajo
        }
    ]

  return (
    <section className='equipo'>
        <h2>Conoce nuestro equipo</h2>
        <div className='grid-equipo'>
            {
                equipo.map(miembro => 
                    <div key={miembro.id} className='card'>
                        <div className='card-image'>
                            <img src={miembro.imagen} alt="" />
                        </div>
                        <div className='card-info'>
                            <h3>{miembro.nombre}</h3>
                            <h4>{miembro.cargo}</h4>
                            <p>{miembro.presentacion}</p>
                        </div>
                    </div>
                )
            }
        </div>
    </section>
  )
}

export default Equipo
