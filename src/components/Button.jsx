const Button = ({ text, className }) => {
  return (
    <>
      {/* 
        Responsive Button Component:
        - Mobile: Compact padding and readable text size.
        - Tablet (md:): Medium scaling for padding and text.
        - Desktop (lg:): Full spacious padding and defined text size.
      */}
      <button 
        className={`
          bg-bgGreen 
          py-3 px-6 sm:py-4 sm:px-8 md:py-4.5 md:px-10 lg:py-5 lg:px-12 
          rounded-xl sm:rounded-2xl 
          font-raleway 
          text-text14 sm:text-text14 md:text-text16 lg:text-text16 
          font-medium 
          text-sText 
          cursor-pointer 
          border-2 border-bgGreen 
          transition-all duration-300
          hover:text-bgGreen hover:bg-sText 
          ${className}
        `}
      >
        {text}
      </button>
    </>
  );
};

export default Button;