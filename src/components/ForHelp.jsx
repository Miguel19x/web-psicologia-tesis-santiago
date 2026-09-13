import { frame2 } from '../assets';
import styles, { layout } from '../style';
import Button2 from './Button2';

const ForHelp = () => (
  <section id="solutions" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Halla la mejor manera de hablar tus problemas
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        “El bienestar psicológico suele asociarse con niveles de funcionamiento óptimo que incluyen, no sólo la relación entre el sujeto y los demás, sino también actitudes internas como el dominio y el crecimiento personal”
      </p>

      <Button2 styles="mt-10" href="#helps" text="Obtén Asesoría" />
    </div>

    <div className={layout.sectionImg}>
      <img src={frame2} alt="card" className='w-[100%] h-[100%]'>
      </img>
    </div>
  </section>
)

export default ForHelp