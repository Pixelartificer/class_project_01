const ClientsCard = ({ quote, authorName, authorRole, authorImg, quoteIcon }) => {
  return (
    <>
      {/* 
        Responsive ClientsCard Component:
        - Mobile: Full width, comfortable padding, and scaled spacing.
        - Tablet & Desktop (sm:): Fixed card width (w-80) with balanced spacing.
      */}
      <div className="relative w-full sm:w-80 rounded-2xl sm:rounded-3xl bg-white p-6 pt-10 sm:p-8 sm:pt-12 shadow-sm transition-all duration-300 hover:shadow-md">
        
        {/* Top Floating Quote Badge */}
        <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white shadow-sm">
          {quoteIcon ? (
            typeof quoteIcon === "string" ? (
              <img src={quoteIcon} alt="quote" className="h-5 w-5 sm:h-6 sm:w-6 object-contain" />
            ) : (
              quoteIcon
            )
          ) : ( 
            /* Default Quote Icon (SVG) */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-7 sm:w-7 text-blueText fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          )}
        </div>

        {/* Quote Description */}
        <p className="font-roboto text-text14 sm:text-text16 leading-relaxed text-lightBlackText">
          {quote}
        </p>

        {/* Author Details Section */}
        <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
          {/* Author Avatar Image */}
          <div className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-gray-100 flex-shrink-0">
            <img
              src={authorImg}
              alt={authorName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Author Name and Role */}
          <div>
            <h4 className="font-inter text-text16 sm:text-text18 font-bold text-blackText">
              {authorName}
            </h4>
            <p className="font-roboto text-text14 text-lightBlackText">
              {authorRole}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsCard;