import Image from "../components/Image";

const ProductCard = ({ imageSrc, imageAlt, title, description, linkText }) => {
  return (
    <>
      {/* 
        Responsive ProductCard Component:
        - Mobile: Full width, fluid height, and comfortable padding.
        - Tablet & Desktop (sm:): Controlled card width (sm:w-[362px]) with structured vertical layout.
      */}
      <div className="w-full sm:w-[362px] h-auto sm:min-h-[352px] rounded-2xl bg-sText p-6 sm:p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md flex flex-col justify-between">
        
        <div>
          {/* Icon Container */}
          <div className="flex h-14 w-14 sm:h-16.5 sm:w-16.5 items-center justify-center rounded-2xl bg-sText">
            <Image imageSrc={imageSrc} imageAlt={imageAlt || title} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
          </div>

          {/* Title */}
          <h3 className="mt-4 sm:mt-6 font-inter text-text18 sm:text-text22 font-bold text-blackText leading-snug">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2.5 sm:mt-3 font-roboto text-text14 sm:text-text16 leading-relaxed text-lightBlackText">
            {description}
          </p>
        </div>

        {/* See More Link / Action */}
        <div className="mt-4 sm:mt-6 pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-1 font-inter text-text14 sm:text-text16 font-semibold text-blueText hover:underline group transition-colors"
          >
            {linkText}
            <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;