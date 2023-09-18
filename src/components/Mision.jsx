import mision from '../assets/mision.png'
import vision from '../assets/vision.png'
import '../css/Mision.css'

const Mision = () => {

    let misionVision = [
        {
            id:1,
            class: 'mision',
            img: mision,
            h2: 'Misión',
            p: 'Gestionar proyectos que fomenten, promuevan, promocionen y difundan el desarrollo artístico y cultural a nivel regional e internacional.'
        },
        {
            id: 2,
            class: 'vision',
            img: vision,
            h2: 'Visión',
            p: 'Generar actividades que incentiven el desarrollo socio-cultural a traves de las artes y de la investigación académica.'
        }
    ]

  return (
    <>
            {
                misionVision.map(item => 
                    <div className={item.class} key={item.id}>     
                        <img src={item.img} alt="foto" />
                        <div className='mision-texto'>
                            <h2>{item.h2}</h2>
                            <p>{item.p}</p>
                        </div>
                    </div>
                )
            }
    </>
  )
}

export default Mision
