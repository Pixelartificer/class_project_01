const SubSubHeading = ({ text, className }) => {
  return (
    <>
      {/* 
        Responsive SubSubHeading Component:
        - Mobile: Compact text size and comfortable line height.
        - Tablet & Desktop (sm:): Defined text-text16 size with font-raleway and blueText color.
      */}
      <h4 className={`text-text14 sm:text-text16 leading-6 sm:leading-6.5 font-bold font-raleway text-blueText ${className}`}>
        {text}
      </h4>
    </>
  );
};

export default SubSubHeading;