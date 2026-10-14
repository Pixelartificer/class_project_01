import { FiChevronRight } from 'react-icons/fi';

const IndustriesCard = ({ imageSrc, title, description, linkText
}) => {
  return (
    <>
    <div className="w-[346px] h-[440px] rounded-2xl bg-white shadow-xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Upper Section: Image Container */}
      <div className="h-[212px] w-full p-4 pb-2">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Lower Section: Content Container */}
      <div className="flex-1 px-7 py-5 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-inter text-text22 font-semibold text-blackText leading-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="mt-4 font-roboto text-text16 leading-relaxed text-lightBlackText">
            {description}
          </p>
        </div>

    
        <div className="mt-auto">
         <a 
              href="#" 
              className="inline-flex items-center gap-1.5 font-inter text-text16 font-semibold text-blueText hover:underline group"
            >
              {linkText}
              <FiChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default IndustriesCard