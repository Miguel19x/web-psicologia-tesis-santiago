import React from 'react'

const Button = ({ styles, text = "Obtén Ayuda", href = "#helps", onClick }) => {
  const commonClasses = `py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles || ''} rounded-[10px] inline-flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={commonClasses}>
        {text}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={commonClasses}>
      {text}
    </button>
  );
};

export default Button