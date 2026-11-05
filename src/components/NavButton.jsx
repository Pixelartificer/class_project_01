const NavButton = ({ text }) => {
  return (
    <>
      {/* 
        Responsive NavButton Component:
        - Mobile: Compact padding and text size for navigation bars.
        - Tablet & Desktop (sm:): Full padding and defined text-text16 size.
      */}
      <button 
        className="
          bg-transparent 
          py-2 px-4 sm:py-2.5 sm:px-5.5 
          rounded-xl sm:rounded-2xl 
          font-raleway 
          text-text14 sm:text-text16 
          font-medium 
          text-sText 
          cursor-pointer 
          border border-sText 
          transition-all duration-300
          hover:text-heroBg hover:bg-sText
        "
      >
        {text}
      </button>
    </>
  );
};

export default NavButton;