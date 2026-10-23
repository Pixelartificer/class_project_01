
import { HiOutlineCalendar } from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';

const NewsCard = ({image, title, authorName, authorImg, date, description}) => {
  return (
    <>
      <div className="w-full max-w-91.5 h-110 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between overflow-hidden">
      {/* Top Image */}
      <div className="w-full h-45rounded-xl overflow-hidden shrink-0 ">
       {image}
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-1 pt-4 pb-1 px-1">
        <div>
          {/* Title */}
          <h2 className="text-text18 font-bold text-blackText leading-snug">
            {title}
          </h2>

          {/* Author and Date Meta Info */}
          <div className="flex items-center gap-4 mt-3 mb-3 text-sm text-blackText">
            {/* Author */}
            <div className="flex items-center gap-2 ">
             <img 
                  src={authorImg} 
                  alt={authorName} 
                  className="w-8 h-8 rounded-full object-cover" 
                />
              <span className="font-semibold text-blackText">{authorName}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1.5 text-lightBlackText font-medium">
              <HiOutlineCalendar className="w-4 h-4 text-blackText" />
              <span className="text-blackText">{date}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lightBlackText text-sm leading-relaxed line-clamp-2">
           {description}
          </p>
        </div>

        {/* See More Link */}
        <div className="pt-2">
          <a
            href="#see-more"
            className="inline-flex items-center gap-1 text-bgGreen hover:text-[#1d5b98] font-medium text-base cursor-pointer transition-colors"
          >
            See More
            <FiChevronRight className="w-4 h-4 mt-0.5" />
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewsCard
