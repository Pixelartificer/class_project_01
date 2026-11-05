const SubHeading = ({ text, className }) => {
  return (
    <>
      {/* 
        Responsive SubHeading Component:
        - Mobile: Scaled down heading size (text-text22) with compact line-height.
        - Tablet & Desktop (sm:, lg:): Scales up to full text-text36 with font-raleway and bold weight.
      */}
      <h2 className={`text-text22 sm:text-text30 lg:text-text36 leading-snug sm:leading-12 font-bold font-raleway text-blackText ${className}`}>
        {text}
      </h2>
    </>
  );
};

export default SubHeading;