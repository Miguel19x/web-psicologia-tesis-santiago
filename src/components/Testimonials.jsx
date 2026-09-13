import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>Psicólogos <br className='sm:block hidden'/> profesionales</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-justify max-w-[450px]`}>A partir de la creación de la página web se busca conceder esta zona libre de estigmas en la cual el adolecente pueda informarse y obtener contactos de las instituciones de ayuda psicológica en Venezuela sin necesidad de recurrir a intermediarios ni a largos procesos de búsqueda.</p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]"> 
      {feedback.map((card) => (<FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials