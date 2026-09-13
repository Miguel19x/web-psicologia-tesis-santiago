import styles from '../style';
import { logo1 } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <a href="#home" aria-label="Volver al inicio" className="inline-block">
          <img
            src={logo1}
            alt='PaginaPsicologia'
            className='w-[266px] h-[72px] object-contain hover:opacity-90 transition-opacity cursor-pointer'
          />
        </a>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Una nueva forma de hacer llegar la ayuda psicológica.</p>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((Link, index) => (
                <li
                  key={Link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                >
                  <a
                    href={Link.link}
                    {...(Link.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-dimWhite hover:text-secondary transition-colors cursor-pointer inline-block"
                  >
                    {Link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        2024 Página de Psicología. Página sin fines de lucro.
      </p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name || social.id}
            className={`transition-transform hover:scale-125 active:scale-95 inline-flex items-center ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
          >
            <img 
              src={social.icon}
              alt={social.name || social.id}
              className='w-[21px] h-[21px] object-contain cursor-pointer'
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer