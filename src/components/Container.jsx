const Container = ({ children, className }) => {
  return (
    <>
      {/* 
        Responsive Container Component:
        - Mobile & Tablet: Fluid horizontal padding (px-4 to px-6) to prevent edge collision.
        - Desktop: Centered with max-w-292 and spacious padding (px-8).
      */}
      <div className={`max-w-292 mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Container;