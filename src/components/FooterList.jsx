const FooterList = ({ text, className }) => {
  return (
    <>
      {/* 
        Responsive FooterList Component:
        - Mobile: Adjusted font size for compact footer layouts.
        - Tablet & Desktop (sm:): Full defined text-text18 size.
      */}
      <li className={`text-text16 sm:text-text18 text-sText transition-colors duration-200 ${className}`}>
        {text}
      </li>
    </>
  );
};

export default FooterList;