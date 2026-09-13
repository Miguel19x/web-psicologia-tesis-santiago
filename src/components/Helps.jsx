import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const featureLinks = {
  "feature-1": "#features",
  "feature-2": "#helps",
  "feature-3": "#solutions",
};

const FeatureCard = ({ id, icon, title, content, index }) => (
  <a
    href={featureLinks[id] || "#helps"}
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card cursor-pointer transition-all duration-300 hover:scale-[1.02] block`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue shrink-0`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 text-justify'>
        {content}
      </p>
    </div>
  </a>
)

const Helps = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Cuando se trata de la salud mental, el autocuidado puede ayudarte.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Ayuda a disminuir el riesgo de contraer enfermedades y aumentar tu nivel de energía. Hasta algunas acciones pequeñas para dedicar un poco de tiempo a sí mismo en la vida diaria pueden generar un gran impacto.</p>

        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (<FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Helps