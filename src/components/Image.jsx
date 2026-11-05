const Image = ({ imageSrc, imageAlt, className }) => {
  return (
    <>
      {/* 
        Responsive Image Component:
        - Ensures images are responsive by default (w-full, h-auto, object-cover) 
          while allowing custom overrides via className.
      */}
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className={`w-full h-auto object-cover ${className}`} 
      />
    </>
  );
};

export default Image;