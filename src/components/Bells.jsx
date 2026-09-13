import { apple, frame1, google } from '../assets';
import styles, { layout } from '../style';

const Bells = () => (
  <section id="helps" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={frame1} alt="Federación de Psicólogos de Venezuela" className="w-[100%] h-[100%] relative z-[5]"/>

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Federación de Psicólogos de Venezuela - FPV</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Líneas Telefónicas de Ayuda Psicológica Nacional gratuita:{' '}
        <a href="tel:+582124163116" className="text-secondary font-semibold hover:underline underline-offset-4 transition-colors">
          0212-4163116
        </a>{' '}
        y{' '}
        <a href="tel:+582124163118" className="text-secondary font-semibold hover:underline underline-offset-4 transition-colors">
          0212-4163118
        </a>.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="tel:+582124163116"
          className="py-3 px-5 bg-blue-gradient font-poppins font-medium text-[16px] text-primary rounded-[10px] inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          <span>📞 Llamar al 0212-4163116</span>
        </a>
        <a
          href="tel:+582124163118"
          className="py-3 px-5 bg-blue-gradient font-poppins font-medium text-[16px] text-primary rounded-[10px] inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          <span>📞 Llamar al 0212-4163118</span>
        </a>
        <a
          href="http://www.fvp.org.ve"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-5 border border-secondary text-secondary font-poppins font-medium text-[16px] rounded-[10px] inline-flex items-center gap-2 hover:bg-secondary hover:text-primary transition-all duration-200"
        >
          <span>🌐 Sitio Oficial FPV</span>
        </a>
        <a
          href="https://findahelpline.com/es-419/organizations/linea-de-ayuda-psicologica-lapsi-de-la-federacion-de-psicologos-de-venezuela"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-5 bg-dimBlue text-dimWhite hover:text-white font-poppins font-normal text-[15px] rounded-[10px] inline-flex items-center gap-2 transition-all duration-200"
        >
          <span>📋 Directorio LAPSI</span>
        </a>
      </div>
    </div>
  </section>
)

export default Bells