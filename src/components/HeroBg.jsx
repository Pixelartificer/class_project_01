const HeroBg = ({ children }) => {
  return (
    <>
      {/* 
        Responsive HeroBg Component:
        - Mobile & Tablet: Full width with subtle responsive padding and adjusted clip-path for smaller screens.
        - Desktop (lg:): Centered, max-width [80%], full polygon slant [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)].
      */}
      <section className="mx-auto w-full lg:max-w-[80%] bg-[#0c5344] text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 [clip-path:polygon(0_0,100%_0,100%_100%,0_92%)] lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] transition-all duration-300">
        {children}
      </section>
    </>
  );
};

export default HeroBg;