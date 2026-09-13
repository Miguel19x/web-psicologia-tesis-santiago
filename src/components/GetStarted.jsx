import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a
    href="#helps"
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 group block`}
    aria-label="Ir a la sección de ayuda"
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full transition-colors group-hover:bg-opacity-90`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Consigue</span>
        </p>
      </div>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Ayuda</span>
        </p>
        <img src={arrowUp} alt="arrow"
          className="w-[23px] h-[23px] object-contain transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
  </a>
)

export default GetStarted