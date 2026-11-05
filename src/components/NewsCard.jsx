import { HiOutlineCalendar } from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';

const NewsCard = ({ image, title, authorName, authorImg, date, description }) => {
  return (
    <>
      {/* 
        Responsive NewsCard Component:
        - w-full ensures it adapts perfectly to whatever grid or flex column width the parent provides.
      */}
      <div className="w-full h-auto sm:min-h-[440px] bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md">
        
        {/* Top Image Container */}
        <div className="w-full h-44 sm:h-45 rounded-xl overflow-hidden shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Card Content */}
        <div className="flex flex-col justify-between flex-1 pt-4 pb-1 px-1">
          <div>
            {/* Title */}
            <h2 className="text-text16 sm:text-text18 font-bold text-blackText leading-snug font-raleway">
              {title}
            </h2>

            {/* Author and Date Meta Info */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 mb-3 text-xs sm:text-sm text-blackText">
              {/* Author */}
              <div className="flex items-center gap-2">
                <img 
                  src={authorImg} 
                  alt={authorName} 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover" 
                />
                <span className="font-semibold text-blackText text-text14">{authorName}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-lightBlackText font-medium">
                <HiOutlineCalendar className="w-4 h-4 text-blackText" />
                <span className="text-blackText text-text14">{date}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lightBlackText text-text14 sm:text-text16 leading-relaxed line-clamp-2 font-roboto">
               {description}
            </p>
          </div>

          {/* See More Link */}
          <div className="pt-3 mt-auto">
            <a
              href="#see-more"
              className="inline-flex items-center gap-1 text-bgGreen hover:text-darkBlueText font-medium text-text14 sm:text-text16 cursor-pointer transition-colors group"
            >
              See More
              <FiChevronRight className="w-4 h-4 mt-0.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;