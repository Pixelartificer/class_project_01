const PText = ({ text, className }) => {
  return (
    <>
      {/* 
        Responsive PText Component:
        - Mobile: Adjusted font size and comfortable line-height for smaller screens.
        - Tablet & Desktop (sm:): Full defined text-text16 size with centered alignment and font-roboto.
      */}
      <p className={`text-text14 sm:text-text16 leading-6 sm:leading-7 font-normal font-roboto text-center text-lightBlackText ${className}`}>
        {text}
      </p>
    </>
  );
};

export default PText;