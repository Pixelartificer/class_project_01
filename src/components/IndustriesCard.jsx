import { FiChevronRight } from 'react-icons/fi';

const IndustriesCard = ({ imageSrc, title, description, linkText }) => {
  return (
    <>
      {/* 
        Responsive IndustriesCard Component:
        - Mobile: Full width, fluid height, clean padding.
        - Tablet & Desktop (sm:, md:): Controlled fixed/fluid card dimensions with elevation and hover transitions.
      */}
      <div className="w-full sm:w-80 md:w-[346px] h-auto sm:min-h-[440px] rounded-2xl bg-white shadow-xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl">
        
        {/* Upper Section: Image Container */}
        <div className="h-48 sm:h-53 w-full p-4 pb-2">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Lower Section: Content Container */}
        <div className="flex-1 px-5 sm:px-7 py-4 sm:py-5 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h3 className="text-text18 sm:text-text22 font-semibold text-blackText leading-tight font-raleway">
              {title}
            </h3>
            
            {/* Description */}
            <p className="mt-3 sm:mt-4 pb-4 sm:pb-6.5 font-roboto text-text14 sm:text-text16 leading-relaxed text-lightBlackText">
              {description}
            </p>
          </div>

          {/* Link Section */}
          <div className="mt-auto pt-2">
            <a 
              href="#" 
              className="inline-flex items-center gap-1.5 font-inter text-text14 sm:text-text16 font-semibold text-blueText hover:underline group"
            >
              {linkText}
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustriesCard;