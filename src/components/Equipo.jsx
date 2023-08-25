/* eslint-disable no-unused-vars */
import '../css/Equipo.css'
import fotoViki from '../assets/foto-viki.jpeg'
import perfil from '../assets/perfil.jpg'

const Equipo = () => {

    const equipo = [
        {
            id: 1,
            nombre: "Jessica Gomez Leccese",
            cargo: 'Presidenta de IGNEAS',
            presentacion: 'Lic. en Artes Plásticas. Miembro fundador de Igneas',
            imagen: perfil
        },
        {
            id: 2,
            nombre: "Maria Victoria Herrero Jaime",
            cargo: 'Vicepresidenta de IGNEAS',
            presentacion: 'Lic. en Artes Plásticas especializada en grabado y posgrado en Arte Digital. Miembro fundador de Igneas.',
            imagen: fotoViki
        },
        {
            id: 3,
            nombre: "Maria Jose Mazzocato",
            cargo: 'Secretaria Gral.',
            presentacion: '',
            imagen: perfil
        }
    ]

  return (
    <section className='equipo'>
        <h2>Conoce a nuestro equipo</h2>
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
